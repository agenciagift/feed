import { useEffect, useState } from "react";
import { authentication, projectFirestore, signInProviders } from "../firebase/config";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [userConfig, setUserConfig] = useState({});
    const signIn = (method = 'google') => {
        setError(null);
        authentication
            .signInWithPopup(signInProviders[method])
            .catch((error) => setError(error));
    }
    const signOut = () => authentication.signOut();

    useEffect(() => {
        const unsub = authentication.onAuthStateChanged(setUser);
        return unsub;
    }, [setUser]);

    useEffect(() => {
        if (!user) {
            setUserConfig({});
            return;
        }

        projectFirestore.collection('userConfig')
            .doc(user.uid)
            .get()
            .then(doc => setUserConfig(doc.data() || {}));
    }, [user]);

    return { user, error, userConfig, signIn, signOut }
};

export default useAuth;
