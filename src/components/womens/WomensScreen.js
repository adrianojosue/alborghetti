import { ShoesList } from '../shoes/ShoesList';
import { motion } from "framer-motion";

export const WomensScreen = () => {

  return (
    <>
        <div className="space"></div>
        <div className="content_stretch">
          <div className="content_normal">
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>For Womens</motion.h1>
          </div>
          <ShoesList gender='womens' />
        </div>
    </>
  )
}
