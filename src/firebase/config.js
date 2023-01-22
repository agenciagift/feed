import firebase from 'firebase/compat/app';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrYdVo7ZeWU3AVYX8iFo7qWAK6gCpMgwQ",
    authDomain: "agencia-gift.firebaseapp.com",
    projectId: "agencia-gift",
    storageBucket: "agencia-gift.appspot.com",
    messagingSenderId: "404011545951",
    appId: "1:404011545951:web:7f4a77ec0dce84fb6432ea",
    measurementId: "G-KE55SGFC5L"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const signInProviders = {
    google: new GoogleAuthProvider(),
    // facebook: new FacebookAuthProvider(),
    github: new GithubAuthProvider(),
    // twitter: new TwitterAuthProvider(),
};

const signInMethods = {
    GOOGLE: 'google',
    // FACEBOOK: 'facebook',
    GITHUB: 'github',
    // TWITTER: 'twitter',
};

const getSignInProvider = (method = signInMethods.GOOGLE) => {
    return signInProviders[method];
};

export {
    getSignInProvider,
    signInMethods,
    projectFirestore,
    timestamp,
};
