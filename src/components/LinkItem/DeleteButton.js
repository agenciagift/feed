import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { LinkInteractionButton } from "./styled";

const DeleteButton = ({ id }) => {
    const { remove } = useContext(GlobalContext);

    return (
        <LinkInteractionButton
            title="Apagar publicação"
            aria-label="Apagar publicação"
            onClick={() => remove(id)}
        >
            DELETAR
        </LinkInteractionButton>
    )
}

export default DeleteButton;
