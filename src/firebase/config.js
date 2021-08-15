import firebase from 'firebase/app';
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

const projectFirestore = firebase.firestore();

export { projectFirestore };
