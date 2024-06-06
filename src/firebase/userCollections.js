import { collections } from "../constants/appConfig";
import { projectFirestore } from "./config";
import { getStatsByLinkId } from "./stats";
import { doc, getDoc, writeBatch, query, where, getDocs, collection } from 'firebase/firestore';

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

    if (collectionData.exists && collectionData.data()) {
        const { items = [] } = (collectionData.data() || {});
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
    
    await batch.commit();
    return link.data(); 
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

    await batch.commit();
    return link.data(); 
};

export const getUserLinksFromCollection = async(collectionName, user) => {
    const { collectionData } = await getUserCollection(collectionName, user);
    if (!collectionData.data()) return [];

    const userLinks = getAllUserLinksFromCollection(collectionData.data().items);
    return userLinks;
};

export const getAllUserLinksFromCollection = async(ids) => {
    const linksRef = collection(projectFirestore, 'links');
    const initialLikes = [];
    const response = await fetchUserLinks(ids, linksRef)
    initialLikes.push(...response)
    return initialLikes || [];
};

export const fetchUserLinks = async (userLinks, linksRef) => {
    let parsedDocs = [];
    const limit = 10;
    while (userLinks.length) {
        const batch = query(linksRef, where("__name__", "in", userLinks.splice(0, limit)));
        const snapshot = await getDocs(batch);
        const docs = snapshot.docs.map((document) => {
            return {url: document.data().url, title: document.data().title}
        })
        parsedDocs.push(...docs);
    };

    return parsedDocs;
}
