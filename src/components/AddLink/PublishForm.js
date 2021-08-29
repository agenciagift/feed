import { BaseButton, BaseInput, BaseTextArea } from "../form";
import { BasePreviewImage, HorizontalLayout, VerticalLayout } from "../layout";

const PublishForm = ({
    image, title, description, setTitle, setDescription,
}) => (
    <HorizontalLayout>
        {image && (
            <BasePreviewImage
                src={image}
                alt="Imagem encontrada." />
        )}

        <VerticalLayout expand>
            <BaseInput
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <BaseTextArea
                expand
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)} />

            <BaseButton>Publicar</BaseButton>
        </VerticalLayout>
    </HorizontalLayout>
);

export default PublishForm;
