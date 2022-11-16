import { motion } from "framer-motion";

export const CookiesScreen = () => {
    return(
        <>
            <div className="space"></div>
            <div className="content_normal not-found">
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>Cookies</motion.h1>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>Cookies and other similar technologies are an essential part of how our web app works. The main goal of cookies is to make your browsing experience easier and more efficient and to improve our services and the web app itself.</motion.p>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>These cookies are necessary for the correct functioning of the Alborghetti web app, and they cannot be deactivated on our web app. Generally speaking, they are configured to respond to actions made by you when requesting services, such as logging in to your account or filling out forms.</motion.p>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>You can configure your browser to block these cookies or alert you when they are present; however, some parts of the Alborghetti web app will not work without them.</motion.p>
            </div>
        </>
    )
}