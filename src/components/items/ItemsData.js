import { useSelector } from 'react-redux';

export const ItemsData = () => {

    const { items } = useSelector( state => state.items );
    const itemsFiltered = items.filter(index => index).slice(0, 8);



    itemsFiltered.sort((a, b) => a.launched > b.launched ? -1 : 1)

    return(
        <>
            {
                itemsFiltered.map((item) => (
                    <li key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{new Date().toLocaleDateString(item.launched)}</p>
                    </li>
                ))
            }
        </>
    )
}