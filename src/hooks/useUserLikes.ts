import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { getUserLinksFromCollection } from "../firebase/userCollections";
import { collection, query, where } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

type UserLikes = {
    url: string;
    title: string;
}

const useUserLikes = (user: User) => {
    const [initialLikes, setInitialLikes] = useState<UserLikes[] | null>(null);

    useEffect(() => {
        async function getUserLikes () {
            const likes = await getUserLinksFromCollection('Likes', user) as UserLikes[];
            setInitialLikes(likes);
        };

        if (user) {
            setInitialLikes(null);
            getUserLikes();
        };
        console.log('user', user);
        
        // const linksRef = collection(projectFirestore, 'userConfig');
        // const linksQuery = query(linksRef, where('uid', '==', user.uid));
        // const unsubscribe = linksQuery.onSnapshot((snapshot) => {
        //     const likes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        //     setInitialLikes(likes);
        // });

        // return unsubscribe;
    }, [user]);

    return { initialLikes };
}

export default useUserLikes;