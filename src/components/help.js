import { motion } from "framer-motion";

export const HelpScreen = () => {
    return(
        <>
            <div className="space"></div>
            <motion.div className="content_normal help" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <div className="customer-image margin-bottom_medium"></div>

                <motion.h1
                    className="margin-bottom_medium align-center"
                    initial={{opacity: 0, scale: 0.5 }}
                    animate={{opacity: 1, scale: 1 }}
                    exit={{opacity: 0, scale: 0.5 }}
                >How can we help you
                <motion.span initial={{ rotate: 0, scale: 1 }} animate={{ rotate: 24, scale: 1.5 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}>
                    ?
                </motion.span>
                </motion.h1>

                <div>
                    <h2 className="margin-bottom_x-small padding-bottom_x-small border-bottom">Contact aur customer service</h2>

                    <h3>Tel:</h3>
                    <span className="margin-bottom_small">
                        <a href="tel:+18090000000">+1 (809) 000-0000</a>
                    </span>

                    <h3>Email:</h3>
                    <span className="margin-bottom_small">
                        <a href="mailto:help@email.com">help@email.com</a>
                    </span>
                    
                    <hr/>

                    <h2 className="margin-bottom_x-small padding-bottom_x-small border-bottom">Schedule</h2>

                    <h3>Mon - Fri:</h3>
                    <span className="margin-bottom_small">8:30 AM to 7:30 PM (AST)</span>

                    <h3>Sat:</h3>
                    <span>10:00 AM to 4:00 PM (AST)</span>
                </div>
            </motion.div>
        </>
    )
}