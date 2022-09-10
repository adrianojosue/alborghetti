import { shoes } from '../data/shoes_v2';

export const getShoesById = ( id = '' ) => {
    return shoes.find( shoe => shoe.id === id);
}