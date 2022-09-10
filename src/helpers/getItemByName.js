import { shoes } from '../data/shoes_v2';

export const getItemByName = (name = '') => {
    
    name = name.toLowerCase().trim();
    if (name.length === 0 ) return [];

    return shoes.filter(
        shoe => shoe.name.toLowerCase().includes( name )
    );

}