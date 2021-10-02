import { collections } from "../constants/appConfig";
import { projectFirestore } from "./config";

export const getUserCollection = async (collectionName, user) => {
    if (!user) {
        throw Error('Invalid user :(');
    }

    const collectionRef = projectFirestore.collection(collections.USERS)
        .doc(user.uid).collection('lists').doc(collectionName);
    const collectionData = await collectionRef.get();

    return { collectionRef, collectionData };
};

export const addLinkToCollection = async (collectionName, id, user) => {
    if (!user) {
        throw Error('Invalid user :(');
    }

    const linkRef = projectFirestore.collection(collections.LINKS).doc(id);
    const link = await linkRef.get();
    if (!link.exists) {
        throw Error('Document not found :(');
    }

    const { collectionRef, collectionData } = await getUserCollection(collectionName, user);

    const batch = projectFirestore.batch();

    if (collectionData.exists) {
        const { items } = (collectionData.data() || {});
        if (items instanceof Array && items.includes(link.id)) {
            throw Error(`Item ${link.id} already added to ${collectionName}.`);
        }
        batch.update(collectionRef, { items: [...items, link.id] });
    } else {
        batch.set(collectionRef, { name: collectionName, items: [link.id] });
    }

    const count = link.data().likes || 0;
    batch.update(linkRef, { likes: count + 1 });

    return batch.commit();
};

export const removeLinkFromCollection = async (collectionName, id, user) => {
    if (!user) {
        throw Error('Invalid user :(');
    }

    const linkRef = projectFirestore.collection(collections.LINKS).doc(id);
    const link = await linkRef.get();
    if (!link.exists) {
        throw Error('Document not found :(');
    }

    const { collectionRef, collectionData } = await getUserCollection(collectionName, user);

    const batch = projectFirestore.batch();

    if (collectionData.exists) {
        const { items } = (collectionData.data() || {});
        if (!(items instanceof Array) || !items.includes(link.id)) {
            throw Error(`Item ${link.id} not in collection ${collectionName}`);
        }
        batch.update(collectionRef, { items: items.filter((item) => item !== link.id) });
    }

    const count = link.data().likes || 0;
    if (count > 0) {
        batch.update(linkRef, { likes: count - 1 });
    }

    return batch.commit();
};
