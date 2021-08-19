import styled from "styled-components";
import { createButtonPallete, uiColors } from "../../constants/colors";

export const UserAvatarContainer = styled.div`
    position: relative;
`;

export const UserAvatarButton = styled.button`
    ${createButtonPallete('currentColor', 'transparent')}
    padding: 0;
    border: 1px solid #fff;
    border-radius: 50%;
    overflow: hidden;

    &:hover, &:focus, &:active {
        border-color: ${uiColors.hover};
    }
`;

export const UserAvatarImg = styled.img`
    display: block;
    width: 46px;
    height: 46px;
`;
