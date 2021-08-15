import React from 'react';
import { logo } from '../../constants/appConfig';
import Search from '../Search';
import { HeaderContainer, HeaderWrapper } from './styled';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img {...logo} alt={logo.alt} />
                <Search />
            </HeaderWrapper>
        </HeaderContainer>
    )
}
