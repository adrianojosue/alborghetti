import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

import { getShoesById } from '../../selectors/getShoesById';
import { startSavingBagItems } from '../../store/bag/';
import { priceFormat } from '../../helpers/priceFormat';

import { Helmet } from "react-helmet-async";
import { FormattedMessage } from 'react-intl';

export const ShoesScreen = () => {

  const { items } = useSelector( state => state.bag );
  const { lang } = useSelector( state => state.lang );

  const { id } = useParams();

  const shoe = useMemo( () => getShoesById(id), [id]);

  const dispatch = useDispatch();

  const { isSaving } = useSelector( state => state.bag );

  const [ itemColor, setItemColor ] = useState({
    checked: shoe.boxes[0].id,
    backgroundImage: shoe.boxes[0].images,
    box: shoe.boxes[0].name,
    boxId: shoe.boxes[0].id,
    price: shoe.boxes[0].price,
  });

  const [ image, setImage ] = useState(0);
  const previousImage = () => {
    const firstImage = image === 0;
    const newImage = firstImage ? itemColor.backgroundImage.length - 1 : image - 1;
    setImage(newImage);
  }
  const nextImage = () => {
    const lastImage = image === itemColor.backgroundImage.length - 1;
    const newImage = lastImage ? 0 : image + 1;
    setImage(newImage);
  }
  const goToImage = (index) => {
    setImage(index);
  }

  // Function to add items to the bag

  const newBagItem = {
    itemId: shoe.id,
    name: shoe.name,
    box: itemColor.box,
    boxId: itemColor.checked,
    image: itemColor.backgroundImage[0],
    price: itemColor.price,
    type: shoe.type,
    quantity: Number(1),
    date: new Date().getTime(),
  }

  const addToBag = () => {
    dispatch( startSavingBagItems( newBagItem ) )
  }

  const mapBagItemsByColor = items.map( mapItemColor => mapItemColor.boxId)
  const searchCurrentBagItemByColor = () => {
    for (let current of mapBagItemsByColor) {
      if ( current === itemColor.boxId ) {
        return current;
      }
    }
  }

  if ( id !== shoe.id ) {
    return <Navigate replace to='/notfound' />
  }

  return (
    <>
      <Helmet>
        <title>Alborghetti Store: {shoe.name}</title>
        <meta property="og:title" content={'Alborghetti Store: ' + shoe.name} />
        <meta property="og:site_name" content='alborghettistore.web.app' />
        <meta name="description" content={shoe.description} />
        <meta property="og:description" content={shoe.description} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
  	    <meta property="og:image" content={shoe.boxes[0].images[0]} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alborghettistore" />
        <meta name="twitter:creator" content="@alborghettistore" />
        <meta name="twitter:title" content={ shoe.name } />
        <meta name="twitter:description" content={ shoe.description } />
        <meta name="twitter:image" content={ shoe.boxes[0].images[0] } />

        <meta property="og:price:currency" content="USD" />
        <meta property="og:price:amount" content={priceFormat(shoe.boxes[0].price)} />
      </Helmet>

      <motion.div
        className="content_normal"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <div className="item_content">

          <div className="content_left_item-info">
              <div className="item_options">
                <NavLink to={`/${shoe.type.en.toLowerCase().trim() + 's'}`}>
                  <button className='btn gender_section'>
                    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.94373 23.4336H15.2581C16.1328 23.4336 16.8178 23.1736 17.313 22.6537C17.8081 22.1338 18.0557 21.354 18.0557 20.3141V9.27214C18.0557 8.2323 17.7937 7.45449 17.2696 6.93872C16.7456 6.42292 15.9554 6.16502 14.8991 6.16502H3.94373C2.89565 6.16502 2.10752 6.42292 1.57935 6.93872C1.05119 7.45449 0.787109 8.2323 0.787109 9.27214V20.3141C0.787109 21.354 1.05119 22.1338 1.57935 22.6537C2.10752 23.1736 2.89565 23.4336 3.94373 23.4336ZM3.00295 4.6548H15.8399C15.7491 4.1514 15.5717 3.76765 15.3076 3.50357C15.0435 3.23949 14.635 3.10744 14.0821 3.10744H4.76075C4.20783 3.10744 3.79932 3.23949 3.53524 3.50357C3.27115 3.76765 3.09372 4.1514 3.00295 4.6548ZM4.74836 1.84479H14.0944C14.0614 1.37439 13.9108 1.02159 13.6426 0.786393C13.3744 0.551194 12.9845 0.433594 12.4728 0.433594H6.37C5.85834 0.433594 5.46841 0.551194 5.2002 0.786393C4.93198 1.02159 4.78136 1.37439 4.74836 1.84479Z" fill="none"/>
                    </svg>
                  </button>
                </NavLink>
              <span>{ shoe.type[lang] + 's' }:</span>
              </div>

              <div className="item_info">
                <h1>{ shoe.name }</h1>

                <ul className="item_colors">
                  <li><FormattedMessage id='Item.Box'/></li>
                  {
                      shoe.boxes.map( (box, index) => (
                          <li key={index}>
                            <input
                              type='radio'
                              id={box.id}
                              name={box.name[lang]}
                              value={box.id}
                              checked={ itemColor.checked === `${box.id}` }
                              onChange={ (e) => {
                                setImage(0)
                                setItemColor({
                                  checked: e.target.value,
                                  backgroundImage: box.images,
                                  box: box.name,
                                  boxId: box.id,
                                  price: box.price,
                                })
                              }}
                              className="colors"
                            />
                            <label className="colors-label" htmlFor={box.id} id={box.id}>{ box.name.toUpperCase() }</label>
                          </li>
                      ))
                  }
                </ul>

                <p>{ shoe.description[lang] }</p>

                <div className="item_info-options">
                  
                  <ul className="item_info_price">
                    <li>US{ priceFormat(itemColor.price) }</li>
                  </ul>

                  {
                    itemColor.checked !== searchCurrentBagItemByColor()

                    ? <button className="btn add-to-bag" onClick={addToBag} disabled={isSaving}>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.0569 4.26554H9.3812C8.27914 4.26554 7.45043 4.53889 6.89506 5.08558C6.3397 5.63228 6.06202 6.45231 6.06202 7.54568V11.1642C6.99052 11.1642 7.86479 11.34 8.68483 11.6914C9.50487 12.0429 10.2273 12.531 10.8521 13.1557C11.4768 13.7805 11.965 14.5029 12.3164 15.323C12.6678 16.143 12.8436 17.0173 12.8436 17.9458C12.8436 18.5532 12.7633 19.139 12.6028 19.703C12.4422 20.267 12.2188 20.8007 11.9324 21.304H21.4214C22.3499 21.304 23.0745 21.0307 23.5951 20.484C24.1158 19.9373 24.3761 19.1173 24.3761 18.0239V7.54568C24.3761 6.45231 24.0984 5.63228 23.5431 5.08558C22.9877 4.53889 22.159 4.26554 21.0569 4.26554ZM10.8781 4.36967H12.7525C12.7525 3.91844 12.8653 3.5106 13.0909 3.14613C13.3165 2.78167 13.6137 2.49314 13.9825 2.28054C14.3513 2.06793 14.7613 1.96163 15.2126 1.96163C15.6638 1.96163 16.076 2.06793 16.4491 2.28054C16.8223 2.49314 17.1195 2.78167 17.3407 3.14613C17.562 3.5106 17.6727 3.91844 17.6727 4.36967H19.56C19.56 3.61472 19.3604 2.92051 18.9613 2.28704C18.5621 1.65358 18.0328 1.14594 17.3733 0.764118C16.7138 0.38231 15.9935 0.191406 15.2126 0.191406C14.4316 0.191406 13.7135 0.38231 13.0583 0.764118C12.4032 1.14594 11.876 1.65358 11.4768 2.28704C11.0777 2.92051 10.8781 3.61472 10.8781 4.36967Z" fill="none"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.67832 22.4755C7.87998 22.9528 7.00788 23.1914 6.06202 23.1914C5.10748 23.1914 4.23321 22.9549 3.43921 22.482C2.64521 22.0091 2.00958 21.3756 1.53231 20.5816C1.05504 19.7876 0.816406 18.909 0.816406 17.9458C0.816406 16.9826 1.05504 16.104 1.53231 15.31C2.00958 14.516 2.64521 13.8825 3.43921 13.4096C4.23321 12.9366 5.10748 12.7002 6.06202 12.7002C7.02522 12.7002 7.90383 12.9366 8.69784 13.4096C9.49184 13.8825 10.1275 14.516 10.6047 15.31C11.082 16.104 11.3207 16.9826 11.3207 17.9458C11.3207 18.9003 11.0798 19.7746 10.5982 20.5686C10.1166 21.3626 9.47666 21.9982 8.67832 22.4755ZM5.56739 21.0242C5.68888 21.15 5.85375 21.2129 6.06202 21.2129C6.26161 21.2129 6.42215 21.15 6.54363 21.0242C6.66512 20.8983 6.72586 20.7356 6.72586 20.5361V18.6226H8.63927C8.84753 18.6226 9.01241 18.5597 9.1339 18.4339C9.25539 18.3081 9.31613 18.1454 9.31613 17.9458C9.31613 17.7462 9.25539 17.5835 9.1339 17.4577C9.01241 17.3318 8.84753 17.2689 8.63927 17.2689H6.72586V15.3555C6.72586 15.1559 6.66512 14.9932 6.54363 14.8674C6.42215 14.7416 6.26161 14.6787 6.06202 14.6787C5.85375 14.6787 5.68888 14.7416 5.56739 14.8674C5.44591 14.9932 5.38516 15.1559 5.38516 15.3555V17.2689H3.47175C3.26349 17.2689 3.09861 17.3318 2.97713 17.4577C2.85564 17.5835 2.7949 17.7462 2.7949 17.9458C2.7949 18.1454 2.85564 18.3081 2.97713 18.4339C3.09861 18.5597 3.26349 18.6226 3.47175 18.6226H5.38516V20.5361C5.38516 20.7356 5.44591 20.8983 5.56739 21.0242Z" fill="none"/>
                        </svg>
                        {
                          isSaving
                          ? <FormattedMessage id='App.loading'/>
                          : <FormattedMessage id='ItemScreen.AddButton'/>
                        }
                      </button>
                    : <button className="btn add-to-bag" disabled>
                        <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ scale: 1.5 }} animate={{ scale: 1 }} exit={{ scale: 1 }} >
                          <path d="M20.6127 4.35034H8.69393C7.56894 4.35034 6.72297 4.62937 6.15605 5.18745C5.58913 5.74552 5.30566 6.58262 5.30566 7.69875V11.3926C6.25349 11.3926 7.14595 11.572 7.98306 11.9308C8.82017 12.2895 9.55762 12.7878 10.1954 13.4256C10.8332 14.0634 11.3315 14.8008 11.6902 15.6379C12.049 16.475 12.2284 17.3675 12.2284 18.3153C12.2284 18.9354 12.1464 19.5333 11.9826 20.1091C11.8187 20.6849 11.5906 21.2297 11.2982 21.7434H20.9847C21.9325 21.7434 22.6722 21.4644 23.2037 20.9063C23.7352 20.3483 24.0009 19.5112 24.0009 18.395V7.69875C24.0009 6.58262 23.7175 5.74552 23.1505 5.18745C22.5836 4.62937 21.7377 4.35034 20.6127 4.35034ZM10.222 4.45663H12.1354C12.1354 3.99601 12.2505 3.57968 12.4808 3.20763C12.7111 2.83558 13.0145 2.54105 13.391 2.32402C13.7675 2.10699 14.186 1.99848 14.6467 1.99848C15.1073 1.99848 15.5281 2.10699 15.909 2.32402C16.2899 2.54105 16.5932 2.83558 16.8191 3.20763C17.045 3.57968 17.158 3.99601 17.158 4.45663H19.0846C19.0846 3.68597 18.8809 2.97731 18.4734 2.33066C18.0659 1.68402 17.5256 1.16581 16.8524 0.776038C16.1791 0.386283 15.4439 0.191406 14.6467 0.191406C13.8494 0.191406 13.1164 0.386283 12.4476 0.776038C11.7788 1.16581 11.2407 1.68402 10.8332 2.33066C10.4257 2.97731 10.222 3.68597 10.222 4.45663Z" fill="none"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.02653 22.9085C7.21157 23.3957 6.32131 23.6393 5.35577 23.6393C4.38136 23.6393 3.4889 23.3979 2.67837 22.9151C1.86784 22.4323 1.21898 21.7857 0.73178 20.9752C0.244578 20.1646 0.000976562 19.2678 0.000976562 18.2845C0.000976562 17.3012 0.244578 16.4043 0.73178 15.5938C1.21898 14.7833 1.86784 14.1366 2.67837 13.6539C3.4889 13.1711 4.38136 12.9297 5.35577 12.9297C6.33902 12.9297 7.23591 13.1711 8.04644 13.6539C8.85698 14.1366 9.50584 14.7833 9.99303 15.5938C10.4802 16.4043 10.7238 17.3012 10.7238 18.2845C10.7238 19.2589 10.478 20.1514 9.98639 20.9619C9.49477 21.7724 8.84148 22.4213 8.02653 22.9085ZM4.3175 21.2319C4.41937 21.2717 4.51902 21.2917 4.61646 21.2917C4.88221 21.2917 5.07709 21.2075 5.20111 21.0392L8.46979 16.4949C8.52294 16.4241 8.56058 16.351 8.58272 16.2757C8.60487 16.2004 8.61594 16.1317 8.61594 16.0698C8.61594 15.8749 8.54508 15.711 8.40336 15.5781C8.26162 15.4452 8.09774 15.3788 7.91171 15.3788C7.66368 15.3788 7.46437 15.4807 7.31377 15.6844L4.58988 19.4846L3.14157 17.93C3.07956 17.8591 3.00427 17.8015 2.91568 17.7572C2.8271 17.7129 2.72523 17.6908 2.61007 17.6908C2.41519 17.6908 2.2491 17.7594 2.1118 17.8967C1.9745 18.0341 1.90585 18.2046 1.90585 18.4083C1.90585 18.4792 1.91692 18.5589 1.93907 18.6475C1.96121 18.7361 1.99443 18.8025 2.03872 18.8468L4.05839 21.0658C4.12926 21.1366 4.21563 21.192 4.3175 21.2319Z" fill="none"/>
                        </motion.svg>
                        <FormattedMessage id='ItemScreen.AddedButtonMessage'/>
                      </button>
                  }
                </div>
              </div>
          </div>

          <motion.div
            className="content_right_image-slider"
            style={{ backgroundImage: `url(${ itemColor.backgroundImage[image] })` }}

            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <motion.button
              className="previous-image"
              onClick={previousImage}
              whileTap={{
                scale: 0.9,
              }}
            >
              <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.7016 22.9609C4.80944 23.2412 4.97658 23.465 5.20302 23.6321C5.42946 23.7992 5.67747 23.8828 5.94704 23.8828C6.38916 23.8828 6.75308 23.7426 7.03882 23.4623C7.32458 23.1819 7.46746 22.8261 7.46746 22.3948C7.46746 22.1683 7.42162 21.9257 7.32995 21.6669C7.23831 21.4081 7.15474 21.1871 7.07926 21.0038L3.31061 11.3315V13.4341L7.07926 3.76185C7.15474 3.57854 7.23831 3.3548 7.32995 3.09064C7.42162 2.82646 7.46746 2.58653 7.46746 2.37086C7.46746 1.95033 7.32458 1.59719 7.03882 1.31145C6.75308 1.02569 6.38916 0.882812 5.94704 0.882812C5.67747 0.882812 5.42946 0.969083 5.20302 1.14162C4.97658 1.31414 4.80944 1.54057 4.7016 1.82092L1.41821 10.2478C1.28882 10.5821 1.15943 10.9406 1.03004 11.3234C0.90064 11.7062 0.835938 12.0593 0.835938 12.3828C0.835938 12.7063 0.90064 13.0595 1.03004 13.4423C1.15943 13.825 1.28882 14.1836 1.41821 14.5178L4.7016 22.9609Z" fill="#FFFFFF"/>
              </svg>
            </motion.button>

            <motion.ul
              className='slideDots'
              whileHover={{
                scale: 1.2,
              }}
            >
              {
                itemColor.backgroundImage.map((imageDot, index) => (
                  <li key={index} className={'dots' + ( imageDot === itemColor.backgroundImage[image] ? ' active' : '')} onClick={() => goToImage(index)}></li>
                ))
              }
            </motion.ul>

            <motion.button
              className="next-image"
              onClick={nextImage}
              whileTap={{
                scale: 0.9,
              }}
            >
              <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.60175 22.9609L6.88515 14.5178C7.01456 14.1836 7.14396 13.825 7.27334 13.4423C7.40275 13.0595 7.46746 12.7063 7.46746 12.3828C7.46746 12.0593 7.40275 11.7062 7.27334 11.3234C7.14396 10.9406 7.01456 10.5821 6.88515 10.2478L3.60175 1.82092C3.49394 1.54057 3.32681 1.31414 3.10037 1.14162C2.87392 0.969083 2.62592 0.882812 2.35634 0.882812C1.92501 0.882812 1.56378 1.02569 1.27265 1.31145C0.981509 1.59719 0.835938 1.95033 0.835938 2.37086C0.835938 2.58653 0.88177 2.82646 0.973433 3.09064C1.06508 3.3548 1.14864 3.57854 1.22412 3.76185L4.99278 13.4341V11.3315L1.22412 21.0038C1.14864 21.1871 1.06508 21.4081 0.973433 21.6669C0.88177 21.9257 0.835938 22.1683 0.835938 22.3948C0.835938 22.8261 0.981509 23.1819 1.27265 23.4623C1.56378 23.7426 1.92501 23.8828 2.35634 23.8828C2.62592 23.8828 2.87392 23.7992 3.10037 23.6321C3.32681 23.465 3.49394 23.2412 3.60175 22.9609Z" fill="#FFFFFF"/>
              </svg>
            </motion.button>
          </motion.div>

        </div>
      </motion.div>
    </>
  )
}