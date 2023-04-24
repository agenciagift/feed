import 'firebase/auth';
import React from 'react';
import { logo } from '../../constants/appConfig';
import Search from '../Search';
import UserAvatar from '../UserAvatar';
import { HeaderContainer, HeaderWrapper } from './styled';
import Favorites from "../FavoritesLink";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img {...logo} alt={logo.alt} />
                <Search />
                <UserAvatar />
                <Favorites />
            </HeaderWrapper>
        </HeaderContainer>
    )
}
