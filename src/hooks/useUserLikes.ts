import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { fetchUserLinks, getUserCollection } from "../firebase/userCollections";
import { collection } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

type UserLikes = {
    url: string;
    title: string;
}

const useUserLikes = (user: User) => {
    const [initialLikes, setInitialLikes] = useState<UserLikes[] | null>(null);

    useEffect(() => {
        if (user) {
            setInitialLikes(null);
            getUserCollection('Likes', user).then((userRef) => {
                if (!userRef?.collectionData?.data()?.items) {
                    setInitialLikes([]);
                    return;
                };
                const userLinks = userRef.collectionData.data()!.items;
                const linksRef = collection(projectFirestore, 'links');
                fetchUserLinks(userLinks, linksRef).then((initialLikes) => {
                    setInitialLikes(initialLikes);
                });
            });
        } else {
            setInitialLikes([]);
        };
    }, [user])

    return { initialLikes };
}

export default useUserLikes;