import { css } from "styled-components";

export const grey = {
    light: '#e7e7e7',
    mid: '#999',
    dark: '#666',
};

const createButtonPallete = (color, bg, hover, active) => css`
    color: ${color};
    background-color: ${bg};

    &:hover, &:focus {
        background-color: ${hover || bg};
    }

    &:active {
        background-color: ${active || hover || bg};
    }
`;

export const buttonColorsCss = {
    primary: createButtonPallete('#fff', '#0062b5', '#008aff', '#0062b5'),
};
