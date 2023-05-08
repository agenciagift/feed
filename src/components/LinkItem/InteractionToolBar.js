// import Bookmark from "../../assets/icons/Bookmark";
// import Copy from "../../assets/icons/Copy";
import { useContext, useEffect, useState } from "react";
import Heart from "../../assets/icons/Heart";
import { GlobalContext } from "../../context/GlobalContext";
import { addLinkToCollection, removeLinkFromCollection } from "../../firebase/userCollections";
import useAuth from "../../hooks/useAuth";
import useUserCollection from "../../hooks/useUserCollection";
import DeleteButton from "./DeleteButton";
import { InteractionToolBarWrapper, LinkInteractionButton, LinkItemButtonLabel } from "./styled";

const isIncluded = (id, collection) => Array.isArray(collection) && collection.includes(id);

const InteractionToolBar = ({ id }) => {
    const [isLiked, setIsLiked] = useState(false);
    const { stats } = useContext(GlobalContext);
    const { user, userConfig } = useAuth();
    const { collection: likesCollection } = useUserCollection('Likes', user);
    const linkStats = stats.find((item) => item.id === id);
    

    useEffect(() => {
        setIsLiked(isIncluded(id, likesCollection?.items));
    }, [id, likesCollection?.items]);

    const handleLikeButton = () => {
        try {
            if (!user || isLiked) {
                removeLinkFromCollection('Likes', id, user);
                setIsLiked(false);
            } else {
                addLinkToCollection('Likes', id, user);
                setIsLiked(true);
            }
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <InteractionToolBarWrapper>
            {userConfig.moderator && <DeleteButton id={id} />}

            {user && <LinkInteractionButton
                title="Marcar como gostei"
                aria-label="Marcar como gostei"
                onClick={handleLikeButton}
                active={ isLiked }
            >
                <Heart />
                <LinkItemButtonLabel>
                    {linkStats?.likes || 0}
                </LinkItemButtonLabel>
            </LinkInteractionButton>}
            {/* <LinkInteractionButton
                title="Salvar para a minha lista"
                aria-label="Salvar para a minha lista"
            >
                <Bookmark />
            </LinkInteractionButton>
            <LinkInteractionButton
                title="Copiar o endereço do link"
                aria-label="Copiar o endereço do link"
            >
                <Copy />
            </LinkInteractionButton> */}
        </InteractionToolBarWrapper>
    )
}

export default InteractionToolBar;
