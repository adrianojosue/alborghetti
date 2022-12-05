import { itemsData } from '../data/itemsData';

export const getShoesByGender = ( type ) => {

    const validGenders = [
        'cigar',
    ];

    if ( !validGenders.includes( type ) ) {
        throw new Error( `${type} is not a valid gender` );
    }

    const sortByMoreNew = itemsData.sort((a, b) => a.launched > b.launched ? -1 : 1)

    return sortByMoreNew.filter( shoe => shoe.type.en.toLowerCase().trim() === type );

};