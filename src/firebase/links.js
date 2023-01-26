import { collections } from "../constants/appConfig";
import { projectFirestore } from "./config";
import { collection, query, where, orderBy, startAt, limit } from 'firebase/firestore';

const PAGE_SIZE = 10;

export const tokenize = (fullText) => {
    const tokensArray = fullText.trim().toLowerCase()
        .split(/[^a-zA-Z\u00C0-\u017F]+/)
        .filter(s => s && s.length > 2);
    const result = [...new Set(tokensArray)];
    return result;
};

export const createLinksRef = (nextItem, searchTerm) => {
    const collRef = collection(projectFirestore, collections.LINKS);

    const linksRef = query(collRef,
        orderBy('createdAt', 'desc'),
        startAt(nextItem),
        limit(PAGE_SIZE + 1));

    if (searchTerm) {
        const tokens = tokenize(searchTerm);
        if (tokens.length) {
            return query(collRef, where('keywords', 'array-contains-any', tokens));
        }
    }

    return linksRef;
};

export const parseDocs = (snap) => {
    let documents = [];
    let last = null;
    snap.forEach(doc => {
        documents.push({ ...doc.data(), id: doc.id });
    });
    if (documents.length === PAGE_SIZE + 1) {
        documents.pop();
        last = snap.docs[snap.size - 1];
    }
    return [documents, last];
};
