import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { startDeletingBagItem, startOnSaveQuantityItem } from '../../store/bag';
import { priceFormat } from '../../helpers/priceFormat';

export const BagScreen = () => {

    const { items, isSaving } = useSelector( state => state.bag );
    const { displayName } = useSelector( state => state.auth);
    const dispatch =  useDispatch();

    const [ loader, setLoader ] = useState(null);

    const listBagItems = items.length;

    const itemPrices = items.map( item => item.price * item.quantity);
    const subtotal = itemPrices.reduce((sum, item) => sum + item, 0);
    const itbis = Math.floor(subtotal*18)/100;
    const delivery = subtotal !== 0 ? 850 : 0;
    const total = Math.round(subtotal + itbis + delivery);
    const summary = {
        subtotal: subtotal,
        itbis: itbis,
        delivery: delivery,
        total: total,
    }

    const onBuyWithGooglePay = () => {
        alert(`Hi ${displayName}, Currently you cannot buy at Alborghetti, we are working on this functionality.`);
    }

    const quantityOptions = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
    ]

    return(
        <>
            <div className="space"></div>
            <div className="content_normal">
                <div className="content_left-right">
                    <div className="content_left">
                        <div className="bag_info">
                            {
                                ( listBagItems !== 0)
                                ? <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>YOUR BAG</motion.h1>
                                : <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>YOUR BAG IS EMPTY</motion.h1>
                            }
                            <h2><span>{listBagItems} {listBagItems === 1 ? 'item' : 'items'}</span></h2>
                        </div>
                        <ul className="bag_items">
                            {
                                items.map( (item, index) => (
                                    <li className="bag_item" key={item.id}>
                                        <Link to={`/shoes/${item.gender}/${item.itemId}`} >
                                            <div className="content">
                                                <div className="image" style={{ backgroundImage: `url(${ item.image })` }} />
                                                <div className="info">
                                                    <h2 className="line-clamp_2">{item.name}</h2>
                                                    <span className="line-clamp_1">{item.color}</span>
                                                    <p className="price line-clamp_1">{priceFormat(item.price * item.quantity)}</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="options">
                                            <button
                                                onClick={
                                                    onDeleteBagItem => {
                                                        setLoader(loader => loader === item.id ? null : item.id)
                                                        dispatch( startDeletingBagItem(item.id) )
                                                    }
                                                }
                                                disabled={ isSaving }
                                            >
                                                <svg width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    {
                                                        loader === item.id && isSaving
                                                        ?   <motion.path
                                                                d="M2.36095 3.69066H22.5277C22.9031 3.69066 23.2316 3.54988 23.5132 3.26831C23.7948 2.98674 23.9355 2.65239 23.9355 2.26525C23.9355 1.87811 23.7948 1.54376 23.5132 1.26219C23.2316 0.980626 22.9031 0.839844 22.5277 0.839844H2.36095C1.97381 0.839844 1.63946 0.980626 1.35789 1.26219C1.07633 1.54376 0.935547 1.87811 0.935547 2.26525C0.935547 2.65239 1.07633 2.98674 1.35789 3.26831C1.63946 3.54988 1.97381 3.69066 2.36095 3.69066Z"
                                                                fill="none"
                                                                initial={{
                                                                    x: -100
                                                                }}
                                                                animate={{
                                                                    x: 100
                                                                }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    repeat: Infinity,
                                                                    repeatType: "reverse",
                                                                    ease: 'linear',
                                                                }}
                                                            />
                                                        :   <path d="M2.36095 3.69066H22.5277C22.9031 3.69066 23.2316 3.54988 23.5132 3.26831C23.7948 2.98674 23.9355 2.65239 23.9355 2.26525C23.9355 1.87811 23.7948 1.54376 23.5132 1.26219C23.2316 0.980626 22.9031 0.839844 22.5277 0.839844H2.36095C1.97381 0.839844 1.63946 0.980626 1.35789 1.26219C1.07633 1.54376 0.935547 1.87811 0.935547 2.26525C0.935547 2.65239 1.07633 2.98674 1.35789 3.26831C1.63946 3.54988 1.97381 3.69066 2.36095 3.69066Z" fill="none"/>
                                                    }
                                                </svg>
                                            </button>
                                            <select
                                                name="quantity"
                                                id={ item.id }
                                                className="item_info-quantity"
                                                onChange={
                                                    (e) => {
                                                        e.preventDefault();
                                                        dispatch( startOnSaveQuantityItem(item.id, Number(e.target.value)) );
                                                    }
                                                }
                                                value={ item.quantity }
                                                disabled={ isSaving }
                                            >
                                                {
                                                    quantityOptions.map( ( quantity, index ) => (
                                                        <option
                                                            value={ quantity.value }
                                                            key={ index }
                                                        >
                                                            { quantity.label }
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="content_right bag_summary sticky" disabled={ listBagItems === 0 }>
                        <h2>Summary</h2>
                        <div>
                            <p>Subtotal <span className="price">{priceFormat(summary.subtotal)}</span></p>
                            <p>ITBIS <span className="price">{priceFormat(summary.itbis)}</span></p>
                            <p>Delivery <span className="price">{priceFormat(summary.delivery)}</span></p>
                            <p>Total <span className="price">{priceFormat(summary.total)}</span></p>
                        </div>
                        <motion.button
                            onClick={ onBuyWithGooglePay }
                            disabled={ listBagItems === 0 }
                            whileTap={{
                                scale: 0.95,
                            }}
                        >
                            Buy with
                            <span>
                            <svg className="colored" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.52 12.2719C23.52 11.421 23.4437 10.6028 23.3018 9.81738H12V14.4592H18.4582C18.18 15.9592 17.3346 17.2301 16.0636 18.081V21.092H19.9418C22.2109 19.0029 23.52 15.9265 23.52 12.2719Z" fill="#4285F4"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.001 24.0003C15.241 24.0003 17.9574 22.9257 19.9428 21.093L16.0646 18.0821C14.9901 18.8021 13.6156 19.2276 12.001 19.2276C8.87554 19.2276 6.23008 17.1166 5.28644 14.2803H1.27734V17.3894C3.25189 21.3112 7.31008 24.0003 12.001 24.0003Z" fill="#34A853"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.28547 14.2795C5.04546 13.5595 4.9091 12.7904 4.9091 11.9995C4.9091 11.2085 5.04546 10.4395 5.28547 9.71945V6.61035H1.27637C0.463637 8.23035 0 10.0631 0 11.9995C0 13.9358 0.463637 15.7686 1.27637 17.3886L5.28547 14.2795Z" fill="#FBBC05"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.001 4.77274C13.7628 4.77274 15.3446 5.37819 16.5883 6.56729L20.0301 3.12546C17.9519 1.18909 15.2356 0 12.001 0C7.31008 0 3.25189 2.6891 1.27734 6.61092L5.28644 9.72002C6.23008 6.88365 8.87554 4.77274 12.001 4.77274Z" fill="#EA4335"/>
                            </svg>
                            Pay
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    )
}