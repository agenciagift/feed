import { projectFirestore } from "../../firebase/config";
import { LinkInteractionButton } from "./styled";

const DeleteButton = ({ id }) => {
    const linkRef = projectFirestore.collection('links').doc(id);

    return (
        <LinkInteractionButton
            title="Apagar publicação"
            aria-label="Apagar publicação"
            onClick={() => linkRef.delete()}
        >
            DELETAR
        </LinkInteractionButton>
    )
}

export default DeleteButton;
