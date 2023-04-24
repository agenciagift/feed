import { useContext } from "react";
import { CloseFavoritesSidebar, FavoriteSidebar, FavoritesLinks, FavoritesTitle, FavoritesUl } from "./styled";
import { GlobalContext } from "../../context/GlobalContext";

export default function Sidebar({initialLikes, setShowSidebar}) { 
    const { likes } = useContext(GlobalContext);

    return likes && likes.length > 0 && (
        <FavoriteSidebar>
            <FavoritesTitle>Favoritos</FavoritesTitle>
            <CloseFavoritesSidebar onClick={() => setShowSidebar(false)}/>
                <FavoritesUl>
                    {likes && likes.length && likes.map((favoriteItem, index) => (
                        <li key={`${favoriteItem.url}-${index}`}>
                            <FavoritesLinks 
                                href={favoriteItem.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {favoriteItem.title || favoriteItem.url}
                            </FavoritesLinks>
                        </li>
                    ))}
                </FavoritesUl>
        </FavoriteSidebar>
    );
};
