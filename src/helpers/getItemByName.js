import { useSelector } from 'react-redux';
import { itemsData } from '../data/itemsData';

export const GetItemByName = (description = '') => {

    const { lang } = useSelector( state => state.lang );
    
    description = description.toLowerCase().trim();
    if (description.length === 0 ) return [];

    return itemsData.filter(
        shoe => shoe.description[lang].toLowerCase().includes( description )
    );

}