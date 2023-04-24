import { useState } from 'react';
import { FavoritesLink, FavoritesSidebarContainer } from "./styled";
import useAuth from '../../hooks/useAuth';
import Sidebar from "../FavoritesSidebar";
import useUserLikes from "../../hooks/useUserLikes";

export default function Favorites() {
    const [showSidebar, setShowSidebar] = useState(false);
    const { user } = useAuth();
    const { initialLikes } = useUserLikes(user);

    return !user || !initialLikes ? null : (
        <>
            <FavoritesLink onClick={() => setShowSidebar(!showSidebar)}>
                Favoritos
            </FavoritesLink>
            
            <FavoritesSidebarContainer showSidebar={showSidebar}>
                <Sidebar
                    showSidebar={showSidebar}
                    initialLikes={initialLikes || []} 
                    setShowSidebar={setShowSidebar}
                />
            </FavoritesSidebarContainer>
        </>
    );
};
