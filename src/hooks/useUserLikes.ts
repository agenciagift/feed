import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { getUserCollection } from "../firebase/userCollections";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

type UserLikes = {
    url: string;
    title: string;
}

const useUserLikes = (user: User) => {
    const [initialLikes, setInitialLikes] = useState<UserLikes[] | null>(null);

    useEffect(() => {
        let snapshoptRef;
        if (user) {
            setInitialLikes(null);
            getUserCollection('Likes', user).then((userRef) => {
                if (!userRef?.collectionData?.data()?.items) {
                    setInitialLikes([]);
                    return;
                };
                const userLinks = userRef.collectionData.data()!.items;
                const linksRef = collection(projectFirestore, 'links');
                let parsedDocs: UserLikes[] = [];
                const linksQuery = query(linksRef, where("__name__", "in", userLinks));
                snapshoptRef = onSnapshot(linksQuery, (snapshot) => {                    
                    snapshot.forEach(doc => {
                        parsedDocs.push({url: doc.data().url, title: doc.data().title});
                    });
                    setInitialLikes(parsedDocs);
                });

            });
        } 
        return snapshoptRef;
    }, [user])

    return { initialLikes };
}

export default useUserLikes;