import { shoes } from '../data/shoes_v2';

export const getItemsBy = (type) => {

    const items = shoes
    items.sort((a, b) => a.launched_at > b.launched_at ? -1 : 1)

    return items.filter( types => type ).slice(0, 8)

}