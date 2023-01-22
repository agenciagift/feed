import { collections } from "../constants/appConfig";
import { projectFirestore } from "./config";
import { getStatsByLinkId } from "./stats";
import { doc, getDoc, writeBatch } from 'firebase/firestore';

export const getUserCollection = async (collectionName, user) => {
    const collectionRef = doc(projectFirestore, collections.USERS, user.uid, 'lists', collectionName);
    const collectionData = await getDoc(collectionRef);

    return { collectionRef, collectionData };
};

export const addLinkToCollection = async (collectionName, id, user) => {
    if (!user) {
        console.log('Invalid user :(');
        return;
    }

    const linkRef = doc(projectFirestore, collections.LINKS, id);
    const link = await getDoc(linkRef);
    if (!link.exists) {
        console.log('Document not found :(');
        return;
    }

    const { collectionRef, collectionData } = await getUserCollection(collectionName, user);

    const batch = writeBatch(projectFirestore);

    if (collectionData.exists) {
        const { items } = (collectionData.data() || {});
        if (items instanceof Array && items.includes(link.id)) {
            console.log(`Item ${link.id} already added to ${collectionName}.`);
            return;
        }
        batch.update(collectionRef, { items: [...items, link.id] });
    } else {
        batch.set(collectionRef, { name: collectionName, items: [link.id] });
    }

    const stats = await getStatsByLinkId(id);
    const count = stats.data.likes || 0;
    batch.set(stats.ref, { likes: count + 1 }, { merge: true });

    return await batch.commit();
};

export const removeLinkFromCollection = async (collectionName, id, user) => {
    if (!user) {
        console.log('Invalid user :(');
        return;
    }

    const linkRef = doc(projectFirestore, collections.LINKS, id);
    const link = await getDoc(linkRef);
    if (!link.exists) {
        console.log('Document not found :(');
        return;
    }

    const { collectionRef, collectionData } = await getUserCollection(collectionName, user);

    const batch = writeBatch(projectFirestore);

    if (collectionData.exists) {
        console.log(collectionData.data());
        const { items } = (collectionData.data() || {});
        if (!(items instanceof Array) || !items.includes(link.id)) {
            console.log(`Item ${link.id} not in collection ${collectionName}`);
            return;
        }
        batch.update(collectionRef, { items: items.filter((item) => item !== link.id) });
    }

    const stats = await getStatsByLinkId(id);
    const count = stats.data.likes || 0;
    if (count > 0) {
        batch.set(stats.ref, { likes: count - 1 }, { merge: true });
    }

    return await batch.commit();
};
