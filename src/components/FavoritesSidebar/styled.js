import styled from "styled-components";
import { MEDIUM } from "../../constants/sizes";
import { grey, uiColors } from "../../constants/colors";

export const FavoriteSidebar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 20em;
    height: 100%;
    background-color: ${grey.dark};
    cursor: default;
    box-shadow: 0px 0px 14px black;

    li {
        padding: 10px;
        
        &:hover {
            color: ${grey.light};
            background: rgba(255, 255, 255, 0.2);

            > a {
                color: #fff;
            }
        }
    }
`;

export const FavoritesUl = styled.ul`
    overflow-y: auto;
    padding: 0;
    padding: 0;
    margin: 0;
    list-style: none;    
    display: flex;
    flex-direction: column;
`

export const FavoritesTitle = styled.h1`
    text-align: center;
    color: ${grey.light};
`

export const FavoritesLink = styled.a`
    display: block;
    text-decoration: none;
    color: ${grey.light};
    cursor: pointer;
    font-size: ${MEDIUM};
`

export const CloseFavoritesSidebar = styled.div`
    position: absolute;
    background-color: ${grey.dark};
    color: ${grey.light};
    top: 0;
    right: 0;
    z-index: 99;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.4em;
    cursor: pointer;

    &:before, &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 20px;
        background-color: ${grey.light};
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }

    &:hover:after, &:hover:before {
        background-color: ${uiColors.hover};
    }
`