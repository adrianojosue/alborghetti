import { Link } from 'react-router-dom';
/* import { shoes } from '../../data/shoes'; */
import { motion } from "framer-motion";

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
    price,
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
                        <ul className="container_item-price"><li className='normal_price'> { price.normal_price } </li></ul>
                    </div>
                </motion.article>
            </Link>
        </>
    )
}
