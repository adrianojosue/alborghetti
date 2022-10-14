import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import { startLoadingItems, setItems } from "./";

export const startGetItems = () => {

    return async ( dispatch ) => {
        dispatch( startLoadingItems() );
        const docs = await getDocs( collection( firebaseDB, 'items' ) );

        const items = []
        docs.forEach( doc => {
            items.push({ id: doc.id, ...doc.data() });
        });

        dispatch( setItems( items ) );
    }

}