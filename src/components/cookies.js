import { motion } from "framer-motion";
import { FormattedMessage } from 'react-intl';


export const CookiesScreen = () => {
    return(
        <>
            <div className="space"></div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="content_normal not-found">
                <h1>Cookies</h1>
                <p><FormattedMessage id='Cookies.DescriptionMessageOne'/></p>
                <p><FormattedMessage id='Cookies.DescriptionMessageTwo'/></p>
                <p><FormattedMessage id='Cookies.DescriptionMessageThree'/></p>
            </motion.div>
        </>
    )
}