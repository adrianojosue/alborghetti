import { useSelector } from 'react-redux';
import { priceFormat } from '../../helpers/priceFormat';

export const ItemsData = ({

    id,
    name,
    type,
    description,
    availabe,
    boxes,
    brand,
    launuched,
    model

}) => {

    const image = {
        backgroundImage: `url(${boxes[0].images[0]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        objectFit: 'cover',
    }

    const { lang } = useSelector( state => state.lang );
    const { isLoading } = useSelector( state => state.items );

    /* const itemsFiltered = items.filter(index => index).slice(0, 8).sort((a, b) => a.launched > b.launched ? -1 : 1); */

    return(
        <>
            {
                isLoading
                ?   'Loading'
                :   <article className="card">
                        <div
                            className="card_images"
                            style={image}
                        >
                        </div>
                        <div className="card_info">
                            <h1>{ name }</h1>
                            <ul className="container_item-color"><p>{type[lang]}</p>
                                {
                                    boxes.map( (data, index) => {
                                        return(
                                            <li className="item_color" key={ index }>{data.name}</li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className="container_item-price"><li className='normal_price'>US{ priceFormat(boxes[0].price) }</li></ul>
                        </div>
                    </article>
            }
        </>
    )
}