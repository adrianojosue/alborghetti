import { shoes } from '../data/shoes_v2';

export const getShoesByGender = ( gender ) => {

    const validGenders = ['mens', 'womens', 'unisex'];

    if ( !validGenders.includes( gender ) ) {
        throw new Error( `${gender} is not a valid gender` );
    }

    const sortByMoreNew = shoes.sort((a, b) => a.launched_at > b.launched_at ? -1 : 1)

    return sortByMoreNew.filter( shoe => shoe.gender[0].toLowerCase().trim() === gender );

};