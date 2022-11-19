import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { priceFormat } from '../../helpers/priceFormat';

export const ShoesCards = ({

    id,
    name,
    brand,
    type,
    gender,
    size,
    collection,
    model,
    description,
    colors,
    images,
    launched_at,
    available,

}) => {

    const image = {
        backgroundImage: `url(${colors[0].color_images[0]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        objectFit: 'cover',
    }

    return (
        <>
            <Link to={`/shoes/${gender}/${id}`} >
                <motion.article
                    className="card"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <div
                        className="card_images"
                        style={ image }
                    >
                    </div>
                    <div className="card_info">
                        <h1>{ name }</h1>
                        <ul className="container_item-color"><p>Colors</p>
                            {
                                colors.map( data => {
                                    return(
                                        <li className="item_color" style={{ backgroundColor: [data.color_hex] }} key={ data.color_id }></li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="container_item-price"><li className='normal_price'>US{ priceFormat(colors[0].price) }</li></ul>
                    </div>
                </motion.article>
            </Link>
        </>
    )
}
