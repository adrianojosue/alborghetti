import { collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { firebaseDB } from '../../firebase/config';
import { loadBagItems } from '../../helpers';

import { addBagItems, deleteBagItemsById, savingBagItems, setBagItems } from "./";

export const startSavingBagItems = ( newBagItem ) => {

    return async (dispatch, getState) => {
        dispatch( savingBagItems() )
        const { uid } = getState().auth;
        
        const newDoc = doc( collection( firebaseDB, `bag/users/${uid}` ) )
        await setDoc( newDoc, newBagItem )

        newBagItem.id = newDoc.id;

        dispatch( addBagItems( newBagItem ) )
    }
}

export const startLoadingBagItems = () => {
    return async ( dispatch, getState ) => {
        dispatch( savingBagItems() )
        const { uid } = getState().auth;
        if (!uid) throw new Error(`The user UID doesn't exist`);
        const items = await loadBagItems( uid );
        dispatch( setBagItems( items ) )
    }
}

export const startDeletingBagItem = (id) => {
    return async ( dispatch, getState ) => {
        dispatch( savingBagItems() )
        const { uid } = getState().auth;

        const docRef = doc( firebaseDB, `bag/users/${uid}/${id}` );
        await deleteDoc( docRef );
        dispatch( deleteBagItemsById(id) )

    }
}

export const startOnSaveQuantityItem = (id, quantityItem) => {

    return async ( dispatch, getState ) => {
        dispatch( savingBagItems() )
        const { uid } = getState().auth;
        const docRef = doc( firebaseDB, `bag/users/${uid}/${id}` );

        await updateDoc( docRef, {
            quantity: quantityItem,
        });

        const items = await loadBagItems( uid );
        dispatch( setBagItems( items ) );
    }

}