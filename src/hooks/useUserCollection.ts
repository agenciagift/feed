import { useEffect, useState } from "react";
import { getUserCollection } from "../firebase/userCollections";
import { User } from "firebase/auth";
import firebase from 'firebase/compat/app';

type UserCollectionReference = firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | undefined;

type UserCollectionData = firebase.firestore.DocumentData | undefined;

const useUserCollection = (collectionName: string, user: User) => {
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
