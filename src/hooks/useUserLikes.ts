import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { getUserLinksFromCollection } from "../firebase/userCollections";

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
    }, [user]);

    return { initialLikes };
}

export default useUserLikes;