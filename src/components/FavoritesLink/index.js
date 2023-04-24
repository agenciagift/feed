import { useEffect, useState } from 'react';
import { FavoritesLink, FavoritesSidebarContainer } from "./styled";
import { getUserLinksFromCollection } from "../../firebase/userCollections";
import useAuth from '../../hooks/useAuth';
import Sidebar from "../FavoritesSidebar";

export default function Favorites() {
    const [showSidebar, setShowSidebar] = useState(false);
    const { user } = useAuth();
    const [likes, setLikes] = useState(null);

    useEffect(() => {
        async function getUserLikes() {
            const likes = await getUserLinksFromCollection('Likes', user);
            setLikes(likes);
        };

        if (user) {
            setLikes(null);
            getUserLikes();
        };
    }, [user]);

    return (
        <>
            <FavoritesLink onClick={() => setShowSidebar(!showSidebar)}>
                Favoritos
            </FavoritesLink>
            
            <FavoritesSidebarContainer showSidebar={showSidebar}>
                <Sidebar
                    showSidebar={showSidebar}
                    likes={likes} 
                    setShowSidebar={setShowSidebar}
                />
            </FavoritesSidebarContainer>
        </>
    );
};
