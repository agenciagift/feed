import styled, { keyframes } from "styled-components";
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FavoritesSidebarContainer = styled.div`
    opacity: ${props => props.isSidebarOpen ? '1' : '0'};
    transition: opacity 0.5s ease-in-out;
    animation: ${fadeIn} 0.5s ease-in-out;
`;