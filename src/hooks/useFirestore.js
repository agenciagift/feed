import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

const PAGE_SIZE = 10;

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const [lastVisible, setLastVisible] = useState({});
    const [startAfter, setStartAfter] = useState({});
    const [loading, setLoading] = useState(false);

    const next = () => lastVisible && setStartAfter(lastVisible);

    useEffect(() => {
        setLoading(true);
        projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .startAfter(startAfter)
            .limit(PAGE_SIZE)
            .get()
            .then(snap => {
                setLoading(false);
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(d => [...d, ...documents]);
                setLastVisible(snap.docs[snap.docs.length - 1]);
            });
    }, [collection, startAfter]);

    return { docs, next, loading };
}

export default useFirestore;
