import { collections } from "../constants/appConfig";
import { projectFirestore } from "./config";
import { doc, getDoc } from 'firebase/firestore';

export const getStatsByLinkId = async (id) => {
    const ref = doc(projectFirestore, collections.STATS, id);
    const snap = await getDoc(ref);
    const data = snap.data() || {};
    return {
        ref,
        snap,
        data,
    };
};
