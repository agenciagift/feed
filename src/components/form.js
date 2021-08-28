import styled, { css } from "styled-components";
import { buttonColorsCss, grey } from "../constants/colors";
import { getSpacing } from "../constants/sizes";

const baseFormControlStyle = css`
    font: inherit;
    line-height: 1.5;
    padding: ${getSpacing('s')};
    border: 1px solid ${grey.mid};
    border-radius: 0;

    ${({ expand }) => expand && css`
        flex: 1;
    `}
`;

export const BaseInput = styled.input`
    ${baseFormControlStyle}
`;

export const BaseTextArea = styled.textarea`
    ${baseFormControlStyle}
    min-height: 6em;
`;

export const BaseButton = styled.button`
    ${baseFormControlStyle}
    ${buttonColorsCss.primary};
`;
