import styled, { css } from "styled-components";
import { createButtonPallete } from "../../constants/colors";
import { LARGE, SMALL } from "../../constants/sizes";
import { BaseButton, BaseInput } from "../form";

export const SearchForm = styled.form`
    display: flex;
    flex: 1;
    margin-left: ${LARGE};
    margin-right: ${LARGE};
    padding-left: ${SMALL};
    padding-right: ${SMALL};
    border-radius: 999px;

    transition: 0.3s ease-in-out;

    ${({ focus }) => focus && css`
        background-color: #fff;
    `}
`;

export const SearchInput = styled(BaseInput)`
    flex: 1;
    background-color: transparent;
    border: 0 none;

    &:hover, &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    &:focus {
        cursor: auto;
    }
`;

export const SearchButton = styled(BaseButton)`
    background-color: transparent;
    border: 0 none;

    ${createButtonPallete('currentColor', 'transparent')}
`;

export const SearchButtonImg = styled.img`
    display: block;
    width: 1em;
    height: 1em;
    opacity: 0.5;
`;
