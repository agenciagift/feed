import firebase from 'firebase/app';
import { useEffect, useState } from "react";
import { authentication, getSignInProvider, projectFirestore } from "../firebase/config";

type UserConfig = {
    admin: boolean;
    moderator: boolean;
    owner: boolean;
};

const defaultUserConfig: UserConfig = {
    admin: false,
    moderator: false,
    owner: false,
};

const useAuth = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [error, setError] = useState(null);
    const [userConfig, setUserConfig] = useState<UserConfig>(defaultUserConfig);
    const signIn = (method = 'google') => {
        setError(null);
        authentication
            .signInWithPopup(getSignInProvider(method))
            .catch((error) => setError(error));
    }
    const signOut = () => authentication.signOut();

    useEffect(() => {
        const unsub = authentication.onAuthStateChanged(setUser);
        return unsub;
    }, [setUser]);

    useEffect(() => {
        if (!user) {
            setUserConfig(defaultUserConfig);
            return;
        }

        projectFirestore.collection('userConfig')
            .doc(user.uid)
            .get()
            .then(doc => {
                const docData = doc.data();
                const data: UserConfig = docData
                    ? {
                        admin: docData.admin,
                        moderator: docData.moderator,
                        owner: docData.owner,
                    }
                    : defaultUserConfig;
                setUserConfig(data);
            });
    }, [user]);

    return { user, error, userConfig, signIn, signOut }
};

export default useAuth;
