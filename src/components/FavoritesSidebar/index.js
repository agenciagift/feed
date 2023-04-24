import { CloseFavoritesSidebar, FavoriteSidebar, FavoritesLinks, FavoritesTitle, FavoritesUl } from "./styled";

export default function Sidebar({showSidebar, likes, setShowSidebar}) { 

    return (
        <FavoriteSidebar>
            <FavoritesTitle>Favoritos</FavoritesTitle>
            <CloseFavoritesSidebar onClick={() => setShowSidebar(false)}/>
                <FavoritesUl>
                    {likes && likes.length && likes.map((favoriteItem) => (
                        <li key={favoriteItem.createdAt}>
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
