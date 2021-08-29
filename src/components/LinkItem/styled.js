import styled from "styled-components";
import { grey, uiColors } from "../../constants/colors";
import { EXTRA_SMALL, LARGE, SMALL } from "../../constants/sizes";
import { NakedButton } from "../form";
import { BasePreviewImage } from "../layout";

export const LinkItemWrapper = styled.li`
    margin-bottom: ${LARGE};
    border-radius: ${EXTRA_SMALL};
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
    margin-right: ${LARGE}
`;

export const LinkInteractionButton = styled(NakedButton)`
    border-radius: 999px;
    margin-right: ${SMALL};
    color: ${grey.mid};
    transition-property: background-color;

    &:hover, &:focus, &:active {
        color: ${({ activeColor }) => (activeColor && uiColors[activeColor]) || uiColors.hover};
    }

    &:active {
        transform: scale(0.9);
    }

    svg {
        display: block;
        color: inherit;

        > * {
            fill: currentColor;
        }
    }
`;
