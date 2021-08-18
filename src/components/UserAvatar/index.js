import { UserAvatarButton, UserAvatarImg } from './styled';
import userOffline from './user-offline.png';

export default function UserAvatar({ user, onClick }) {
    const userAvatar = {
        src: user ? user.photoURL : userOffline,
        alt: user ? user.displayName : 'Faça login',
    };

    return (
        <UserAvatarButton onClick={onClick}>
            <UserAvatarImg
                src={userAvatar.src}
                alt={userAvatar.alt} />
        </UserAvatarButton>
    );
};
