import { ShoesList } from '../shoes/ShoesList';
import { motion } from "framer-motion";
import { FormattedMessage } from 'react-intl';

export const MensScreen = () => {

  return (
    <>
        <div className="space"></div>
        <div className="content_normal">
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><FormattedMessage id='Menu.SectionMen'/></motion.h1>
          <ShoesList type='cigar' />
        </div>
    </>
  )
}
