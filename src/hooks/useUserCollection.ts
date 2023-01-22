import { useEffect, useState } from "react";
import { getUserCollection } from "../firebase/userCollections";
import { User } from "firebase/auth";
import { DocumentReference, DocumentData } from 'firebase/firestore';

type UserCollectionReference = DocumentReference<DocumentData> | undefined;

type UserCollectionData = DocumentData | undefined;

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
