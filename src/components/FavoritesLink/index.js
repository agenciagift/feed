import { FavoritesTitle, FavoritesSidebarContainer } from "./styled";
import useAuth from '../../hooks/useAuth';
import SidebarPanel from "../FavoritesSidebar";
import useUserLikes from "../../hooks/useUserLikes";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function FavoritesPanel() {
    const { user } = useAuth();
    const { initialLikes } = useUserLikes(user);
    const { isSidebarOpen } = useContext(GlobalContext);
    return !user || !initialLikes ? null : (
        <>  
            <FavoritesSidebarContainer isSidebarOpen={isSidebarOpen}>
                <SidebarPanel
                    initialLikes={initialLikes || []} 
                />
            </FavoritesSidebarContainer>
        </>
    );
};
