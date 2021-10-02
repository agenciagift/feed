import { useEffect, useState } from "react";
import { getUserCollection } from "../firebase/userCollections";
import firebase from 'firebase/app';

type UserCollectionReference = firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | undefined;

type UserCollectionData = firebase.firestore.DocumentData | undefined;

const useUserCollection = (collectionName: string, user: firebase.User) => {
    const [reference, setReference] = useState<UserCollectionReference>();
    const [collection, setCollection] = useState<UserCollectionData>();

    useEffect(() => {
        if (!user) {
            return;
        }

        getUserCollection(collectionName, user).then(({
            collectionRef,
            collectionData,
        }) => {
            setReference(collectionRef);
            setCollection(collectionData.data());
        }).catch((error) => {
            console.warn(error);
        });
    }, [collectionName, user]);

    return { collection, reference };
};

export default useUserCollection;
