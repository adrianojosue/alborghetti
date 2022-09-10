import { /* useEffect, */ useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// Test

/* import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/slices/items'; */

// Test

import { getItemsBy } from '../../selectors/getItemsBy';
import { ShoesCards } from './ShoesCards';

export const ShoesCarouselCards = ({ type }) => {

    // Test

    /* const dispatch = useDispatch();
    const { isLoading, items = [], page } = useSelector( state => state.items );
    useEffect(() => {
        dispatch( getItems() )
    }); */

    // Test

    const shoes = useMemo(() => getItemsBy(type), [type]);

    const scrollableRefContainer = useRef([null]); // null

    const [onScrollLeft, setOnScrollLeft] = useState(0);
    const [onScrollLeftEnding, setOnScrollLeftEnding] = useState();

    const prevScroll = () => {

        const scroll = scrollableRefContainer.current;
        const windowWidth = window.innerWidth - 205;

        scroll.scrollTo({
            top: 0,
            left: scroll.scrollLeft - scroll.offsetWidth + windowWidth,
            behavior: 'smooth',
        });
    }

    const nextScroll = () => {

        const scroll = scrollableRefContainer.current;
        const windowWidth = window.innerWidth - 205;

        scroll.scrollTo({
            top: 0,
            left: scroll.scrollLeft + scroll.offsetWidth - windowWidth,
            behavior: 'smooth',
        });
    }

    const onScroll = (e) => {
        setOnScrollLeft(e.currentTarget.scrollLeft);
        setOnScrollLeftEnding(scrollableRefContainer.current.scrollWidth - scrollableRefContainer.current.offsetWidth);
    }

    return (
        <>
            <section ref={ scrollableRefContainer } onScroll={ onScroll } className="cards-carousel">

                <>
                    <AnimatePresence mode='wait' initial={false}>
                        {   onScrollLeft !== 0 &&
                            <motion.button
                                className="scroll-button_back"
                                onClick={ prevScroll }
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 100}}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                            >
                                <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.7016 22.9609C4.80944 23.2412 4.97658 23.465 5.20302 23.6321C5.42946 23.7992 5.67747 23.8828 5.94704 23.8828C6.38916 23.8828 6.75308 23.7426 7.03882 23.4623C7.32458 23.1819 7.46746 22.8261 7.46746 22.3948C7.46746 22.1683 7.42162 21.9257 7.32995 21.6669C7.23831 21.4081 7.15474 21.1871 7.07926 21.0038L3.31061 11.3315V13.4341L7.07926 3.76185C7.15474 3.57854 7.23831 3.3548 7.32995 3.09064C7.42162 2.82646 7.46746 2.58653 7.46746 2.37086C7.46746 1.95033 7.32458 1.59719 7.03882 1.31145C6.75308 1.02569 6.38916 0.882812 5.94704 0.882812C5.67747 0.882812 5.42946 0.969083 5.20302 1.14162C4.97658 1.31414 4.80944 1.54057 4.7016 1.82092L1.41821 10.2478C1.28882 10.5821 1.15943 10.9406 1.03004 11.3234C0.90064 11.7062 0.835938 12.0593 0.835938 12.3828C0.835938 12.7063 0.90064 13.0595 1.03004 13.4423C1.15943 13.825 1.28882 14.1836 1.41821 14.5178L4.7016 22.9609Z" fill="#FFFFFF"/>
                                </svg>
                            </motion.button>
                        }
                    </AnimatePresence>
                </>

                <>
                    <AnimatePresence mode='wait'>
                        {
                            onScrollLeftEnding !== onScrollLeft &&
                            <motion.button
                                className="scroll-button_next"
                                onClick={ nextScroll }
                                initial={{opacity: 0, x: -100}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -100}}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                            >
                                <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.60175 22.9609L6.88515 14.5178C7.01456 14.1836 7.14396 13.825 7.27334 13.4423C7.40275 13.0595 7.46746 12.7063 7.46746 12.3828C7.46746 12.0593 7.40275 11.7062 7.27334 11.3234C7.14396 10.9406 7.01456 10.5821 6.88515 10.2478L3.60175 1.82092C3.49394 1.54057 3.32681 1.31414 3.10037 1.14162C2.87392 0.969083 2.62592 0.882812 2.35634 0.882812C1.92501 0.882812 1.56378 1.02569 1.27265 1.31145C0.981509 1.59719 0.835938 1.95033 0.835938 2.37086C0.835938 2.58653 0.88177 2.82646 0.973433 3.09064C1.06508 3.3548 1.14864 3.57854 1.22412 3.76185L4.99278 13.4341V11.3315L1.22412 21.0038C1.14864 21.1871 1.06508 21.4081 0.973433 21.6669C0.88177 21.9257 0.835938 22.1683 0.835938 22.3948C0.835938 22.8261 0.981509 23.1819 1.27265 23.4623C1.56378 23.7426 1.92501 23.8828 2.35634 23.8828C2.62592 23.8828 2.87392 23.7992 3.10037 23.6321C3.32681 23.465 3.49394 23.2412 3.60175 22.9609Z" fill="#FFFFFF"/>
                                </svg>
                            </motion.button>
                        }
                    </AnimatePresence>
                </>

                {
                    shoes.map( shoe => (

                        <div className="card-carousel_container" key={shoe.id}>
                            <ShoesCards
                                key={shoe.id}
                                { ...shoe }
                            />
                        </div>
                    ))
                }

            </section>
        </>
    )
}
