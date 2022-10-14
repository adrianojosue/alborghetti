import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase/config"

export const loadItems = async () => {
    const collectionRef = collection( firebaseDB, 'items' );
    const docs = await getDocs( collectionRef );

    const items = []
    docs.forEach( doc => {
        items.push({ id: doc.id, ...doc.data() });
    });

    console.log(items);
    
    return items;
}