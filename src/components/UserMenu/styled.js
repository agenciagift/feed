import styled from "styled-components";
import { createButtonPallete, grey } from "../../constants/colors";
import { MEDIUM, SMALL } from "../../constants/sizes";

export const UserMenuContainer = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 200px;
    margin-top: ${MEDIUM};
    background-color: #fff;
    border-radius: 4px;
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));

    &:before {
        content: '';
        position: absolute;
        right: 16px;
        bottom: 100%;
        border-width: 0 ${SMALL} ${SMALL};
        border-style: solid;
        border-color: transparent transparent #fff;
    }
`;

export const UserMenuList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const UserMenuText = styled.p`
    margin: ${MEDIUM};
    font-size: 0.75em;
`;

export const UserMenuButton = styled.button`
    display: block;
    width: 100%;
    border: 0 none;
    padding: ${MEDIUM};

    white-space: nowrap;
    font: inherit;
    text-align: left;

    ${createButtonPallete('currentColor', 'transparent', grey.light)}
`;
