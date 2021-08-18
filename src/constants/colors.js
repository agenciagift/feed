import { css } from "styled-components";

export const grey = {
    light: '#e7e7e7',
    mid: '#999',
    dark: '#666',
};

export const createButtonPallete = (color, bg, hover, active) => css`
    color: ${color};
    background-color: ${bg};

    &:hover, &:focus {
        background-color: ${hover || bg};
    }

    &:active {
        background-color: ${active || hover || bg};
    }
`;

export const uiColors = {
    idle: '#0062b5',
    hover: '#008aff',
    active: '#0062b5',
};

export const buttonColorsCss = {
    primary: createButtonPallete('#fff', uiColors.idle, uiColors.hover, uiColors.active),
};
