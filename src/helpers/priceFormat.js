export const priceFormat = (price) => {
    return new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP' }).format(price);
}