import 'firebase/auth';
import React from 'react';
import { logo } from '../../constants/appConfig';
import useAuth from '../../hooks/useAuth';
import Search from '../Search';
import UserAvatar from '../UserAvatar';
import { HeaderContainer, HeaderWrapper } from './styled';

export default function Header() {
    const { user, signIn, signOut } = useAuth();

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img {...logo} alt={logo.alt} />
                <Search />
                <UserAvatar user={user} onClick={() => {
                    user ? signOut() : signIn();
                }} />
            </HeaderWrapper>
        </HeaderContainer>
    )
}
