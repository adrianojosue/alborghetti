import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FormattedMessage } from 'react-intl';
import { AlborghettiLogo } from './AlborghettiLogo';


export const LandingPage = () => {

    return(
        <>
            <motion.div
                className="snap_sections"
                initial={{opacity: 0 }}
                animate={{opacity: 1 }}
                exit={{opacity: 0 }}
            >
                <section>
                    <div className="container">
                        <div className='container-logo'>
                            <AlborghettiLogo />
                            <motion.span
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 1 }}
                                transition={{
                                    type: 'just'
                                }}
                            >
                                <FormattedMessage id='LandingPage.Message'/>
                            </motion.span>
                        </div>

                        <div className="action_buttons">
                            <Link
                                to="/register"
                            >
                                <motion.button
                                    className='accent'
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{
                                        scale: 1,
                                    }}
                                >
                                    <FormattedMessage id='LandingPage.SignUp'/>
                                </motion.button>
                            </Link>
                            <Link to="/login">
                                <motion.button className='normal'><FormattedMessage id='LandingPage.SignIn'/></motion.button>
                            </Link>
                        </div>
                    </div>
                    <motion.div
                        className="app_screen"
                        initial={{opacity: 0, y: 100 }}
                        animate={{opacity: 1, y: 0 }}
                        exit={{opacity: 0, y: 100 }}
                        transition={{
                            duration: 0.5,
                            type: 'just'
                        }}
                    >
                    </motion.div>
                </section>
                <section>
                    <div className='content_normal'>
                        <div className='description'>
                            <h2><FormattedMessage id='AboutUs.title'/></h2>
                            <p><FormattedMessage id='AboutUs.Info'/></p>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}