import { motion } from "framer-motion";
import { FormattedMessage } from 'react-intl';


export const AboutUs = () => {
    return(
        <>
            <div className="space"></div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="content_normal not-found">
                <h1><FormattedMessage id='AboutUs.title'/></h1>
                <p><FormattedMessage id='AboutUs.Info'/></p>
                
            </motion.div>
        </>
    )
}