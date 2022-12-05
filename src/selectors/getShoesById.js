import { itemsData } from '../data/itemsData';

export const getShoesById = ( id = '' ) => {
    return itemsData.find( shoe => shoe.id === id);
}