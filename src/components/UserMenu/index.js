import { signInMethods } from '../../firebase/config';
import useAuth from '../../hooks/useAuth';
import { UserMenuButton, UserMenuContainer, UserMenuList, UserMenuText } from "./styled";

const UserMenu = ({ showMenu, setShowMenu }) => {
    const { user, signIn, signOut } = useAuth();

    if (!showMenu) {
        return null;
    }

    const close = () => setShowMenu(false);

    const SignInButton = ({ method, children }) => {
        return (
            <UserMenuButton
                onClick={() => {
                    signIn(method);
                    close();
                }}>
                {children}
            </UserMenuButton>
        );
    };

    const SignOutButton = () => (
        <UserMenuButton
            onClick={() => {
                signOut();
                close();
            }}>
            Sair
        </UserMenuButton>
    );

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
                                <SignOutButton />
                            </li>
                        </UserMenuList>
                    </>
                )
                : (
                    <>
                        <UserMenuList>
                            <li>
                                <SignInButton method={signInMethods.GOOGLE}>
                                    Login com Google
                                </SignInButton>
                            </li>
                            <li>
                                <SignInButton method={signInMethods.GITHUB}>
                                    Login com GitHub
                                </SignInButton>
                            </li>
                        </UserMenuList>
                    </>
                )
            }
        </UserMenuContainer>
    );
};

export default UserMenu;
