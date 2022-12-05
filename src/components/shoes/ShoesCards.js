import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { priceFormat } from '../../helpers/priceFormat';
import { FormattedMessage } from 'react-intl';

export const ShoesCards = ({

    id,
    name,
    brand,
    type,
    model,
    description,
    boxes,

}) => {

    const image = {
        backgroundImage: `url(${boxes[0].images[0]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        objectFit: 'cover',
    }

    return (
        <>
            <Link to={`/${type.en.toLowerCase().trim() + 's'}/${id}`} >
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
                        <ul className="container_item-color"><p><FormattedMessage id='Item.Box'/></p>
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
                </motion.article>
            </Link>
        </>
    )
}
