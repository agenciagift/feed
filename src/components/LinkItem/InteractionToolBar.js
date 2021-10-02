// import Bookmark from "../../assets/icons/Bookmark";
// import Copy from "../../assets/icons/Copy";
import { useContext, useEffect, useState } from "react";
import Heart from "../../assets/icons/Heart";
import { GlobalContext } from "../../context/GlobalContext";
import useAuth from "../../hooks/useAuth";
import useUserCollection from "../../hooks/useUserCollection";
import DeleteButton from "./DeleteButton";
import { InteractionToolBarWrapper, LinkInteractionButton, LinkItemButtonLabel } from "./styled";

const isIncluded = (id, collection) => Array.isArray(collection) && collection.includes(id);

const InteractionToolBar = ({ id, likes }) => {
    const { like, removeLike } = useContext(GlobalContext);
    const { user, userConfig } = useAuth();
    const [isLiked, setIsLiked] = useState(false);
    const { collection: likesCollection } = useUserCollection('Likes', user);

    useEffect(() => {
        setIsLiked(isIncluded(id, likesCollection?.items));
    }, [id, likesCollection?.items])

    const handleLikeButton = () => {
        if (!user || isLiked) {
            removeLike(id);
            setIsLiked(false);
        } else {
            like(id);
            setIsLiked(true);
        }
    };

    return (
        <InteractionToolBarWrapper>
            {userConfig.moderator && <DeleteButton id={id} />}

            <LinkInteractionButton
                title="Marcar como gostei"
                aria-label="Marcar como gostei"
                onClick={handleLikeButton}
                style={{ color: isLiked ? 'red' : null }}
            >
                <Heart />
                <LinkItemButtonLabel>
                    {likes || 0}
                </LinkItemButtonLabel>
            </LinkInteractionButton>
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
