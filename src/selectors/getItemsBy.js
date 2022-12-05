import { itemsData } from '../data/itemsData';

export const getItemsBy = (type) => {

    const items = itemsData
    items.sort((a, b) => a.launched > b.launched ? -1 : 1)

    return items.filter( types => type ).slice(0, 8)

}