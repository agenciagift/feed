import Bookmark from "../../assets/icons/Bookmark";
import Copy from "../../assets/icons/Copy";
import Heart from "../../assets/icons/Heart";
import useAuth from "../../hooks/useAuth";
import { HorizontalLayout } from "../layout";
import DeleteButton from "./DeleteButton";
import { LinkInteractionButton } from "./styled";

const InteractionToolBar = ({ id }) => {
    const { userConfig } = useAuth();

    return (
        <HorizontalLayout style={{ justifyContent: 'flex-end' }}>
            {userConfig.moderator && <DeleteButton id={id} />}

            <LinkInteractionButton
                title="Marcar como gostei"
                aria-label="Marcar como gostei"
            >
                <Heart />
            </LinkInteractionButton>
            <LinkInteractionButton
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
            </LinkInteractionButton>
        </HorizontalLayout>
    )
}

export default InteractionToolBar;
