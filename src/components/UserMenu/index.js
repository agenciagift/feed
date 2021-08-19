import useAuth from '../../hooks/useAuth';
import { UserMenuButton, UserMenuContainer, UserMenuList, UserMenuText } from "./styled";

const UserMenu = ({ showMenu, setShowMenu }) => {
    const { user, signIn, signOut } = useAuth();

    if (!showMenu) {
        return null;
    }

    const close = () => setShowMenu(false);

    return (
        <UserMenuContainer>
            {user
                ? (
                    <>
                        <UserMenuText>
                            {user.displayName}
                        </UserMenuText>
                        <UserMenuList>
                            <li>
                                <UserMenuButton
                                    onClick={() => {
                                        signOut();
                                        close();
                                    }}>
                                    Sair
                                </UserMenuButton>
                            </li>
                        </UserMenuList>
                    </>
                )
                : (
                    <>
                        <UserMenuList>
                            <li>
                                <UserMenuButton
                                    onClick={() => {
                                        signIn();
                                        close();
                                    }}>
                                    Login
                                </UserMenuButton>
                            </li>
                        </UserMenuList>
                    </>
                )
            }
        </UserMenuContainer>
    );
};

export default UserMenu;
