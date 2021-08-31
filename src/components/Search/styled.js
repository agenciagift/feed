import styled, { css } from "styled-components";
import Loupe from "../../assets/icons/Loupe";
import { createButtonPallete } from "../../constants/colors";
import { MEDIUM } from "../../constants/sizes";
import { BaseButton, BaseInput } from "../form";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: ${MEDIUM};
    margin-right: ${MEDIUM};
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
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0 none;
    padding-left: 0;

    ${createButtonPallete('transparent', 'transparent')}
`;

export const SearchButtonImg = styled(Loupe)`
    display: block;
    width: 0.5em;
    height: 0.5em;
`;
