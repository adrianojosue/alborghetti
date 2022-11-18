import { ShoesCarouselCards } from './shoes/ShoesCarouselCards';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const WhatsNewScreen = () => {

  const { displayName, photoURL, email } = useSelector( state => state.auth);

  return (
    <>
        <div className="space"></div>
        <div className="content_normal">
          <NavLink to='/account'>
            <motion.div
              className="user_welcome"
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.95}}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <figure
                className="user_welcome-image"
              >
                {
                    (!!photoURL === true)
                    
                    ? <img src={ photoURL } alt='' referrerPolicy='no-referrer' />

                    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3522 22.4447C14.9661 23.0433 13.4849 23.3425 11.9089 23.3425C10.3423 23.3425 8.86596 23.0433 7.47979 22.4447C6.09362 21.8462 4.87122 21.0149 3.81259 19.9509C2.75398 18.8868 1.92324 17.6612 1.32035 16.2741C0.71746 14.8871 0.416016 13.4097 0.416016 11.8422C0.416016 10.2746 0.71746 8.79726 1.32035 7.41017C1.92324 6.02309 2.75161 4.79753 3.80548 3.73348C4.85936 2.66942 6.07939 1.83812 7.46556 1.2396C8.85173 0.641066 10.3281 0.341797 11.8946 0.341797C13.4707 0.341797 14.9518 0.641066 16.338 1.2396C17.7242 1.83812 18.9489 2.66942 20.0123 3.73348C21.0757 4.79753 21.9088 6.02309 22.5117 7.41017C23.1146 8.79726 23.416 10.2746 23.416 11.8422C23.416 13.4097 23.1146 14.8871 22.5117 16.2741C21.9088 17.6612 21.078 18.8868 20.0194 19.9509C18.9608 21.0149 17.7384 21.8462 16.3522 22.4447ZM9.46648 21.0845C10.2782 21.2981 11.0924 21.4049 11.9089 21.4049C12.7159 21.4049 13.5277 21.2981 14.3442 21.0845C15.1607 20.8709 15.9369 20.5552 16.6727 20.1374C17.4085 19.7197 18.066 19.207 18.6451 18.5994C18.2369 17.9727 17.6933 17.4411 17.0145 17.0043C16.3356 16.5676 15.5595 16.2353 14.686 16.0074C13.8125 15.7796 12.8868 15.6656 11.9089 15.6656C10.912 15.6656 9.97681 15.7819 9.10333 16.0145C8.22985 16.2471 7.45606 16.5818 6.78196 17.0186C6.10787 17.4553 5.57143 17.9822 5.17267 18.5994C5.75182 19.207 6.4093 19.7197 7.14512 20.1374C7.88093 20.5552 8.65472 20.8709 9.46648 21.0845ZM9.95782 13.2232C10.537 13.5887 11.1873 13.7762 11.9089 13.7857C12.621 13.7952 13.269 13.6149 13.8529 13.2446C14.4368 12.8743 14.8972 12.3711 15.2343 11.735C15.5713 11.0988 15.7399 10.3773 15.7399 9.57026C15.7399 8.82021 15.569 8.13187 15.2272 7.50524C14.8854 6.87862 14.4249 6.37781 13.8458 6.00278C13.2666 5.62776 12.621 5.44025 11.9089 5.44025C11.1873 5.44025 10.537 5.62776 9.95782 6.00278C9.37867 6.37781 8.9182 6.87862 8.57641 7.50524C8.23459 8.13187 8.06369 8.82021 8.06369 9.57026C8.06369 10.3773 8.23459 11.0965 8.57641 11.7279C8.9182 12.3592 9.37867 12.8577 9.95782 13.2232Z" fill="none"/>
                      </svg>
                  }
              </figure>
              <section className="user_welcome-info">
                <h2><FormattedMessage id='user.welcome'/>, {

                (!!displayName === true)
                ? displayName
                : 'User'

                }</h2>
                <p>{ email }</p>
              </section>
            </motion.div>
          </NavLink>
        </div>
        <div className="content_stretch">
          <div className="content_normal content_carousel">
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>New arrivals</motion.h1>
          </div>
          <ShoesCarouselCards type />
        </div>
    </>
  )
}
