import { projectFirestore } from "./config";

export const addLink = async (data) => {
    try {
        console.log('trying to add data', data);
        const linksRef = projectFirestore.collection("links");
        console.log('ref', linksRef);
        await linksRef.add(data);
        console.log("Document added: ", linksRef);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};
