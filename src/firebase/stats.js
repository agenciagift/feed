import { collections } from "../constants/appConfig";
import { projectFirestore } from "./config";

export const getStatsByLinkId = async (id) => {
    const ref = projectFirestore.collection(collections.STATS).doc(id);
    const snap = await ref.get();
    const data = snap.data() || {};
    return {
        ref,
        snap,
        data,
    };
};
