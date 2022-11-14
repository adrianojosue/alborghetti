import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Link, Navigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { startDeletingBagItem, startOnSaveQuantityItem } from '../../store/bag';
import { priceFormat } from '../../helpers/priceFormat';

export const BagScreen = () => {

    const { items, isSaving } = useSelector( state => state.bag );
    const dispatch =  useDispatch();

    const [ loader, setLoader ] = useState(null);
    const [ payWithPaypal, setPayWithPaypal ] = useState(false);

    const listBagItems = items.length;

    const itemPrices = items.map( item => item.price * item.quantity);
    const subtotal = itemPrices.reduce((sum, item) => sum + item, 0);
    const itbis = Math.floor(subtotal*18)/100;
    const delivery = subtotal !== 0 ? 20 : 0;
    const total = subtotal + itbis + delivery;
    const summary = {
        subtotal: subtotal,
        itbis: itbis,
        delivery: delivery,
        total: total,
    }

    const quantityOptions = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
    ]

    const purchase_items = items.map( (item, index) => {
        return {
            name: `${item.name} in ${item.color} color`,
            quantity: `${item.quantity}`,
            unit_amount: {
                currency_code: 'USD',
                value: item.price.toFixed(2),
            },
            tax: {
                currency_code: 'USD',
                value: Math.floor(item.price*18)/100,
            }
        }
    })

    const paypalHandleApprove = (orderID) => {
        setPayWithPaypal(true)
        for (let item of items) {
            dispatch( startDeletingBagItem(item.id) )
        }
    }

    if ( payWithPaypal ) {
        return <Navigate to='/account' />
    }

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
                        <div>
                            {
                                isSaving === true
                                ?   <button disabled className="paypal_button">Loading...</button>
                                :   <PayPalButtons
                                        style={{
                                            layout: 'vertical',
                                            color: 'gold',
                                            shape: 'rect',
                                            label: 'pay',
                                            height: 55,
                                            tagline: false,
                                        }}
                                        disabled={ listBagItems === 0 || isSaving === true }
                                        fundingSource='paypal'
                                        className='button paypal_button'
                                        createOrder={ async (data, actions) => {

                                            const order = await actions.order.create({
                                                purchase_units: [
                                                    {
                                                        description: 'Alborghetti Store',
                                                        reference_id: 'C4TalU6eqD',
                                                        category: 'PHYSICAL_GOODS',
                                                        amount: {
                                                            currency_code: 'USD',
                                                            value: summary.total.toFixed(2),
                                                            breakdown: {
                                                                item_total: {
                                                                    currency_code: 'USD',
                                                                    value: summary.subtotal.toFixed(2),
                                                                },
                                                                shipping: {
                                                                    currency_code: 'USD',
                                                                    value: summary.delivery.toFixed(2),
                                                                },
                                                                handling: {
                                                                    currency_code: 'USD',
                                                                    value: 0.00,
                                                                },
                                                                tax_total: {
                                                                    currency_code: 'USD',
                                                                    value: summary.itbis.toFixed(2),
                                                                },
                                                                shipping_discount: {
                                                                    currency_code: 'USD',
                                                                    value: 0.00,
                                                                }
                                                                
                                                            }
                                                        },
                                                        items: [
                                                            ...purchase_items
                                                        ]
                                                    }
                                                ],
                                            });
                                            return order

                                        }}
                                        onApprove={ async (data, actions) => {
                                            const order = await actions.order.capture()
                                            console.log(order)
                                            paypalHandleApprove(data.orderID)
                                        }}
                                        onShippingChange={(data, actions) => {
                                                if (data.shipping_address.country_code !== 'DO') {
                                                    return actions.reject();
                                                }
                                                return actions.resolve();
                                            }
                                        }
                                        onError={ err => {
                                            console.error(`PayPal error: ${err}`)
                                        }}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}