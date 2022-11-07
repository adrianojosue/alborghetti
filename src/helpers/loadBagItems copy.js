import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase/config"

export const loadBagItems = async ( uid = '' ) => {
    if (!uid) throw new Error(`The user UID doesn't exist`);
    const collectionRef = collection( firebaseDB, `bag/users/${uid}` );
    const docs = await getDocs( collectionRef );

    const items = []
    docs.forEach( doc => {
        items.push({ id: doc.id, ...doc.data() });
    });
    
    return items;
}