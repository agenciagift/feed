import { User, signInWithPopup, getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { getSignInProvider, projectFirestore } from "../firebase/config";

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
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState(null);
    const [userConfig, setUserConfig] = useState<UserConfig>(defaultUserConfig);
    const signIn = (method = 'google') => {
        setError(null);
        signInWithPopup(getAuth(), getSignInProvider(method))
        .catch((error) => setError(error));
    }
    const logOut = () => {
        setError(null);
        signOut(getAuth())
        .catch((error) => setError(error));
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(getAuth(), setUser);
        return unsub;
    }, [setUser]);

    useEffect(() => {
        if (!user) {
            setUserConfig(defaultUserConfig);
            return;
        }

        const docRef = doc(projectFirestore, 'userConfig', user.uid);
        getDoc(docRef)
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

    return { user, error, userConfig, signIn, logOut }
};

export default useAuth;
