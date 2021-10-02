// import Bookmark from "../../assets/icons/Bookmark";
// import Copy from "../../assets/icons/Copy";
import { useContext } from "react";
import Heart from "../../assets/icons/Heart";
import { GlobalContext } from "../../context/GlobalContext";
import useAuth from "../../hooks/useAuth";
import DeleteButton from "./DeleteButton";
import { InteractionToolBarWrapper, LinkInteractionButton } from "./styled";

const InteractionToolBar = ({ id }) => {
    const { like } = useContext(GlobalContext);
    const { userConfig } = useAuth();

    return (
        <InteractionToolBarWrapper>
            {userConfig.moderator && <DeleteButton id={id} />}

            <LinkInteractionButton
                title="Marcar como gostei"
                aria-label="Marcar como gostei"
                onClick={() => like(id)}
            >
                <Heart />
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
