import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

const authentication = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const signInProviders = {
    google: new firebase.auth.GoogleAuthProvider(),
};

const getSignInProvider = (method) => {
    return signInProviders.google;
};

export {
    getSignInProvider,
    authentication,
    projectFirestore,
    timestamp,
};
