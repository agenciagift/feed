import styled, { css } from "styled-components";
import { grey, uiColors } from "../../constants/colors";
import { LARGE, MEDIUM, SMALL } from "../../constants/sizes";
import { NakedButton } from "../form";
import { BasePreviewImage, HorizontalLayout } from "../layout";

export const LinkItemWrapper = styled.li`
    margin-bottom: ${LARGE};
    border-radius: ${MEDIUM};
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

export const LinkMetadata = styled.p`
    font-size: 0.8em;
`;

export const LinkPreviewImage = styled(BasePreviewImage)`
    margin-right: ${LARGE};
    margin-bottom: ${LARGE};
`;

export const InteractionToolBarWrapper = styled(HorizontalLayout)`
    justify-content: flex-end;
    margin-top: ${MEDIUM};
    margin-bottom: ${MEDIUM};
`;

export const LinkInteractionButton = styled(NakedButton)`
    border-radius: 999px;
    margin-right: ${SMALL};
    color: ${grey.mid};
    transition-property: background-color;

    ${({ children }) => typeof children === 'string'
    ? css`
        padding: ${SMALL} ${MEDIUM};
    `
    : css`
        padding: ${SMALL};
    `}

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
