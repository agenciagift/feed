import { useEffect, useState } from "react";
import { authentication, projectFirestore, signInProviders } from "../firebase/config";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [userConfig, setUserConfig] = useState({});
    const signIn = (method = 'google') => authentication.signInWithPopup(signInProviders[method]);
    const signOut = () => authentication.signOut();

    authentication.onAuthStateChanged(setUser);

    useEffect(() => {
        if (!user) {
            return;
        }

        projectFirestore.collection('userConfig')
            .doc(user.uid)
            .get()
            .then(doc => setUserConfig(doc.data() || {}));
    }, [user]);

    return { user, userConfig, signIn, signOut }
};

export default useAuth;
