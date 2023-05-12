import { FavoritesSidebarContainer } from "./styled";
import useAuth from '../../hooks/useAuth';
import SidebarPanel from "../FavoritesSidebar";
import useUserLikes from "../../hooks/useUserLikes";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useUserCollection from "../../hooks/useUserCollection";
import { onSnapshot } from "firebase/firestore";
import { getAllUserLinksFromCollection } from "../../firebase/userCollections";

export default function FavoritesPanel() {
    const { user } = useAuth();
    const [likes, setLikes] = useState([]);
    const { initialLikes } = useUserLikes(user);
    const { isSidebarOpen } = useContext(GlobalContext);
    const { reference } = useUserCollection('Likes', user);

    useEffect(() => {
        if (!likes.length && initialLikes && initialLikes.length) {
            setLikes(initialLikes)
        };
    }, [initialLikes, likes]);

    useEffect(() => {
        if (!reference) {
            return;
        }
        
            return onSnapshot(reference, (snap) => {
                if (!snap.data().items) {
                    return;
                }
                const userLinks = snap.data().items;
                getAllUserLinksFromCollection(userLinks).then((links) => {
                    if (links && links.length) setLikes(links)
                });
            });
    }, [reference])

    return !user || !likes || !reference ? null : (
        <FavoritesSidebarContainer isSidebarOpen={isSidebarOpen}>
            <SidebarPanel
                initialLikes={likes || []} 
                reference={reference}
                isOpen={isSidebarOpen}
            />
        </FavoritesSidebarContainer>
    );
};
