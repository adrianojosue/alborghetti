import { ItemsList } from './ItemsList';
import { motion } from "framer-motion";
import { FormattedMessage } from 'react-intl';

export const CigarsScreen = () => {

  return (
    <>
        <div className="space"></div>
        <div className="content_stretch">
          <div className="content_normal">
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><FormattedMessage id='App.SectionMessage'/> <FormattedMessage id='Menu.SectionMen'/></motion.h1>
          </div>
          <ItemsList />
        </div>
    </>
  )
}
