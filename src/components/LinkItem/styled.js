import styled from "styled-components";
import { grey, uiColors } from "../../constants/colors";
import { getSpacing } from "../../constants/sizes";
import { NakedButton } from "../form";
import { BasePreviewImage } from "../layout";

export const LinkItemWrapper = styled.li`
    margin-bottom: ${getSpacing('l')};
    border-radius: ${getSpacing('xs')};
    box-shadow: 0 3px 0 ${grey.light};
`;

export const LinkItemLink = styled.a`
    word-break: break-word;
    font-size: 1.4em;
    color: ${uiColors.idle};
    text-decoration: none;

    &:hover, &:focus, &:active {
        color: ${uiColors.hover};
        text-decoration: underline;
    }
`;

export const LinkPreviewImage = styled(BasePreviewImage)`
    margin-right: ${getSpacing('l')}
`;

export const LinkInteractionButton = styled(NakedButton)`
    border-radius: 999px;
    margin-right: ${getSpacing('s')};
    color: ${grey.mid};

    &:hover, &:focus, &:active {
        color: ${({ activeColor }) => (activeColor && uiColors[activeColor]) || uiColors.hover};
    }

    svg {
        display: block;
        color: inherit;

        > * {
            fill: currentColor;
        }
    }
`;
