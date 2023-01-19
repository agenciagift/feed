import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import UserMenu from '../UserMenu';
import { UserAvatarButton, UserAvatarContainer, UserAvatarImg } from './styled';
import userOffline from './user-offline.png';

export default function UserAvatar() {
    const [showMenu, setShowMenu] = useState(false);
    const { user } = useAuth();
    const userAvatar = {
        src: user ? user.photoURL : userOffline,
        alt: user ? user.displayName : 'Faça login',
    };

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !(ref.current.contains(event.target))) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <UserAvatarContainer ref={ref}>
            <UserAvatarButton onClick={() => setShowMenu(!showMenu)}>
                <UserAvatarImg
                    src={userAvatar.src}
                    alt={userAvatar.alt} />
            </UserAvatarButton>
            <UserMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </UserAvatarContainer>
    );
};
