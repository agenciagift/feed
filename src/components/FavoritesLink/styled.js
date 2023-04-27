import styled from "styled-components";
import { uiColors } from "../../constants/colors";

export const FavoritesList = styled.ul`
    position: relative;
    list-style-type: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: ${uiColors.hover};
    }
`;

export const FavoritesSidebarContainer = styled.div`
    opacity: ${({showSidebar}) => showSidebar ? 1 : 0};
    transition: opacity 0.2s;
`