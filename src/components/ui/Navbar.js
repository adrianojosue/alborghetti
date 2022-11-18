import { NavLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogoutFirebase } from '../../store/auth';

import { motion, useDragControls } from "framer-motion";
import { SelectLang } from './selectLang';

export const Navbar = () => {

  const [sidenav, setSidenav] = useState(false);
  const { displayName, photoURL, email } = useSelector( state => state.auth);
  const { items } = useSelector( state => state.bag );

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
  })

  const toggleSidenav = () => {

    setSidenav(!sidenav)
    const body = document.body

    if (!sidenav) {
      document.body.classList.add('no-scroll')
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
      body.style.top = `-${scrollY}`
    }
    
    else {
      document.body.classList.remove('no-scroll')
      const scrollY = body.style.top;
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    
  }

  // Firebase Logout
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch( startLogoutFirebase() );
  }

  const drag = useDragControls();
  function startDrag(event) {
    drag.start(event)
  }

  // List of items in the bag
  const listBagItems = items.length;
  const NewListBagItems = useMemo( () => {
    return listBagItems > 9 ? '9+' : listBagItems;
  }, [listBagItems]);

  return (
    <>
      <header className="navbar">
          <NavLink id='logo'
            className={ ({ isActive }) => '' + ( isActive ? ' active' : '') }
            to="/"
          >
              <motion.svg
                width="38"
                height="56"
                viewBox="0 0 38 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4924 7.89624C11.4921 3.56206 15.0235 0.0461733 19.3975 0C23.7718 0.0460979 27.3029 3.56206 27.3029 7.89617C26.9855 11.5638 26.0564 13.6129 23.273 17.2571C25.7292 15.5856 27.1858 14.9855 30.0064 14.8166C34.4219 14.8166 38 18.3499 38 22.7131C38 27.0754 34.4219 30.6101 30.0064 30.6101C25.6978 30.3727 21.9879 29.3482 19.3975 25.9293C19.5095 31.3123 23.737 35.314 26.5221 37.0327H33.2075C34.5936 37.0327 35.6878 36.3762 35.6878 35.5737C35.6878 34.7713 34.5936 34.1147 33.2075 34.1147V33.3852C35.8337 33.3852 37.9493 35.5008 37.9493 38.127C37.9493 40.2426 36.6362 41.9934 34.8124 42.65C36.3444 43.3065 37.9493 44.7655 37.9493 47.7565C37.9493 51.9877 34.6665 56 30.2895 56H27.8091C23.7239 56 20.1493 50.7475 20.1493 50.7475L14.8239 42.8688H7.67466C3.37056 42.8688 1.47383 44.109 1.47383 46.5164C1.47383 48.3401 2.20334 50.4557 3.66236 51.55C3.66236 49.4344 5.12138 47.9754 6.94515 47.9754C8.76893 47.9754 10.2279 49.4344 10.2279 51.2582C10.2279 53.082 8.76893 54.541 6.94515 54.541C3.51646 54.541 0.744321 50.8934 0.744321 46.5164C0.744321 41.7016 3.51646 37.0327 10.5927 37.0327H12.273C15.0584 35.3141 19.2856 31.3121 19.3975 25.9293C16.8071 29.3482 13.0969 30.3728 8.78837 30.6101C4.37305 30.6101 0.795 27.0755 0.795 22.7132C0.795232 18.35 4.37313 14.8167 8.78875 14.8167C11.6094 14.9856 13.0659 15.5856 15.5221 17.2572C12.7387 13.613 11.8098 11.5639 11.4924 7.89624ZM33.1346 42.8688C35.6149 43.0877 37.2198 45.4221 37.2198 47.2459C37.2198 49.5803 34.8124 50.1639 33.2075 50.1639H27.8091C22.9214 50.1639 20.514 49.6533 19.4927 48.1213L15.8452 42.8688H33.1346Z" fill="none"/>
              </motion.svg>
              
          </NavLink>

          <nav className="global-nav">
            <div className="left-items">
              <NavLink
                className={ ({ isActive }) => '' + ( isActive ? ' active' : '') }
                to="/search"
              >

                  {
                    ({ isActive }) => (isActive === true)
                    
                    ? <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2852 20.9863C12.4805 20.9863 12.6904 20.9472 12.915 20.8691C13.1397 20.791 13.3496 20.7162 13.5449 20.6445L18.623 18.7793C18.8118 18.7077 18.9469 18.6003 19.0283 18.457C19.1097 18.3138 19.1504 18.1869 19.1504 18.0762C19.1504 17.8418 19.0723 17.6383 18.916 17.4658C18.7597 17.2933 18.5547 17.207 18.3008 17.207C18.1771 17.207 18.0371 17.2331 17.8809 17.2852C17.7246 17.3373 17.5912 17.3861 17.4805 17.4316L11.6895 19.5898H12.9004L7.09961 17.4316C6.98893 17.3861 6.85872 17.3373 6.70898 17.2852C6.55925 17.2331 6.41927 17.207 6.28906 17.207C6.04817 17.207 5.84635 17.29 5.68359 17.4561C5.52083 17.6221 5.43945 17.8288 5.43945 18.0762C5.43945 18.1869 5.47851 18.3138 5.55664 18.457C5.63477 18.6003 5.77149 18.7077 5.9668 18.7793L11.0352 20.6445C11.237 20.7226 11.4502 20.7991 11.6748 20.874C11.8994 20.9489 12.1029 20.9863 12.2852 20.9863ZM3.06641 15.7031H21.5137C22.5293 15.7031 23.2943 15.4492 23.8086 14.9414C24.3229 14.4336 24.5801 13.6784 24.5801 12.6758V3.29102C24.5801 2.28841 24.3229 1.53483 23.8086 1.03027C23.2943 0.525714 22.5293 0.273438 21.5137 0.273438H3.06641C2.04427 0.273438 1.27767 0.525714 0.766602 1.03027C0.255534 1.53483 0 2.28841 0 3.29102V12.6758C0 13.6849 0.255534 14.4418 0.766602 14.9463C1.27767 15.4508 2.04427 15.7031 3.06641 15.7031ZM3.08594 14.1309C2.59766 14.1309 2.22331 14.0007 1.96289 13.7402C1.70248 13.4798 1.57227 13.0957 1.57227 12.5879V3.37891C1.57227 2.87109 1.70248 2.48861 1.96289 2.23145C2.22331 1.97428 2.59766 1.8457 3.08594 1.8457H21.4844C21.9661 1.8457 22.3405 1.97428 22.6074 2.23145C22.8743 2.48861 23.0078 2.87109 23.0078 3.37891V12.5879C23.0078 13.0957 22.8743 13.4798 22.6074 13.7402C22.3405 14.0007 21.9661 14.1309 21.4844 14.1309H3.08594ZM3.96484 5.7129H4.86328C5.15625 5.7129 5.30273 5.56966 5.30273 5.2832V4.38477C5.30273 4.09179 5.15625 3.94531 4.86328 3.94531H3.96484C3.67839 3.94531 3.53516 4.09179 3.53516 4.38477V5.2832C3.53516 5.56966 3.67839 5.7129 3.96484 5.7129ZM7.10938 5.7129H8.00781C8.29427 5.7129 8.4375 5.56966 8.4375 5.2832V4.38477C8.4375 4.09179 8.29427 3.94531 8.00781 3.94531H7.10938C6.81641 3.94531 6.66992 4.09179 6.66992 4.38477V5.2832C6.66992 5.56966 6.81641 5.7129 7.10938 5.7129ZM10.2539 5.7129H11.1426C11.4355 5.7129 11.582 5.56966 11.582 5.2832V4.38477C11.582 4.09179 11.4355 3.94531 11.1426 3.94531H10.2539C9.96093 3.94531 9.81445 4.09179 9.81445 4.38477V5.2832C9.81445 5.56966 9.96093 5.7129 10.2539 5.7129ZM13.3887 5.7129H14.2871C14.5801 5.7129 14.7266 5.56966 14.7266 5.2832V4.38477C14.7266 4.09179 14.5801 3.94531 14.2871 3.94531H13.3887C13.1022 3.94531 12.959 4.09179 12.959 4.38477V5.2832C12.959 5.56966 13.1022 5.7129 13.3887 5.7129ZM16.5332 5.7129H17.4316C17.7181 5.7129 17.8613 5.56966 17.8613 5.2832V4.38477C17.8613 4.09179 17.7181 3.94531 17.4316 3.94531H16.5332C16.2403 3.94531 16.0938 4.09179 16.0938 4.38477V5.2832C16.0938 5.56966 16.2403 5.7129 16.5332 5.7129ZM19.6777 5.7129H20.5664C20.8594 5.7129 21.0059 5.56966 21.0059 5.2832V4.38477C21.0059 4.09179 20.8594 3.94531 20.5664 3.94531H19.6777C19.3848 3.94531 19.2383 4.09179 19.2383 4.38477V5.2832C19.2383 5.56966 19.3848 5.7129 19.6777 5.7129ZM3.96484 8.8574H4.86328C5.15625 8.8574 5.30273 8.71093 5.30273 8.418V7.5293C5.30273 7.2363 5.15625 7.0898 4.86328 7.0898H3.96484C3.67839 7.0898 3.53516 7.2363 3.53516 7.5293V8.418C3.53516 8.71093 3.67839 8.8574 3.96484 8.8574ZM7.10938 8.8574H8.00781C8.29427 8.8574 8.4375 8.71093 8.4375 8.418V7.5293C8.4375 7.2363 8.29427 7.0898 8.00781 7.0898H7.10938C6.81641 7.0898 6.66992 7.2363 6.66992 7.5293V8.418C6.66992 8.71093 6.81641 8.8574 7.10938 8.8574ZM10.2539 8.8574H11.1426C11.4355 8.8574 11.582 8.71093 11.582 8.418V7.5293C11.582 7.2363 11.4355 7.0898 11.1426 7.0898H10.2539C9.96093 7.0898 9.81445 7.2363 9.81445 7.5293V8.418C9.81445 8.71093 9.96093 8.8574 10.2539 8.8574ZM13.3887 8.8574H14.2871C14.5801 8.8574 14.7266 8.71093 14.7266 8.418V7.5293C14.7266 7.2363 14.5801 7.0898 14.2871 7.0898H13.3887C13.1022 7.0898 12.959 7.2363 12.959 7.5293V8.418C12.959 8.71093 13.1022 8.8574 13.3887 8.8574ZM16.5332 8.8574H17.4316C17.7181 8.8574 17.8613 8.71093 17.8613 8.418V7.5293C17.8613 7.2363 17.7181 7.0898 17.4316 7.0898H16.5332C16.2403 7.0898 16.0938 7.2363 16.0938 7.5293V8.418C16.0938 8.71093 16.2403 8.8574 16.5332 8.8574ZM19.6777 8.8574H20.5664C20.8594 8.8574 21.0059 8.71093 21.0059 8.418V7.5293C21.0059 7.2363 20.8594 7.0898 20.5664 7.0898H19.6777C19.3848 7.0898 19.2383 7.2363 19.2383 7.5293V8.418C19.2383 8.71093 19.3848 8.8574 19.6777 8.8574ZM3.96484 12.002H4.86328C5.15625 12.002 5.30273 11.8555 5.30273 11.5625V10.6641C5.30273 10.3776 5.15625 10.2344 4.86328 10.2344H3.96484C3.67839 10.2344 3.53516 10.3776 3.53516 10.6641V11.5625C3.53516 11.8555 3.67839 12.002 3.96484 12.002ZM7.20703 12.002H17.334C17.6855 12.002 17.8613 11.8229 17.8613 11.4648V10.7617C17.8613 10.4102 17.6855 10.2344 17.334 10.2344H7.20703C6.84896 10.2344 6.66992 10.4102 6.66992 10.7617V11.4648C6.66992 11.8229 6.84896 12.002 7.20703 12.002ZM19.6777 12.002H20.5664C20.8594 12.002 21.0059 11.8555 21.0059 11.5625V10.6641C21.0059 10.3776 20.8594 10.2344 20.5664 10.2344H19.6777C19.3848 10.2344 19.2383 10.3776 19.2383 10.6641V11.5625C19.2383 11.8555 19.3848 12.002 19.6777 12.002Z" fill="none"/>
                      </svg>

                    : <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.7909C0 11.1354 0.259334 12.4003 0.778001 13.5856C1.29664 14.771 2.01437 15.8127 2.9312 16.7107C3.84802 17.6087 4.90891 18.3092 6.11387 18.8121C7.31882 19.3149 8.61285 19.5664 9.99596 19.5664C11.0542 19.5664 12.0653 19.4124 13.0293 19.1046C13.9933 18.7967 14.8787 18.3656 15.6854 17.8114L21.5321 23.5536C21.6998 23.7075 21.8831 23.8204 22.0822 23.8922C22.2813 23.9641 22.4856 24 22.6952 24C23.1562 24 23.5334 23.8512 23.8268 23.5536C24.1202 23.2559 24.2669 22.8813 24.2669 22.4298C24.2669 22.2142 24.2276 22.0115 24.149 21.8217C24.0704 21.6318 23.963 21.465 23.8268 21.3214L18.0116 15.61C18.6298 14.7992 19.1117 13.8987 19.4575 12.9083C19.8033 11.9179 19.9762 10.8788 19.9762 9.7909C19.9762 8.43618 19.7168 7.1687 19.1982 5.98844C18.6795 4.80821 17.9644 3.76908 17.0528 2.87106C16.1412 1.97306 15.0803 1.27005 13.8702 0.76203C12.6599 0.25401 11.3685 0 9.99596 0C8.61285 0 7.31882 0.25401 6.11387 0.76203C4.90891 1.27005 3.84802 1.97306 2.9312 2.87106C2.01437 3.76908 1.29664 4.80821 0.778001 5.98844C0.259334 7.1687 0 8.43618 0 9.7909ZM2.4204 9.7909C2.4204 8.7646 2.61424 7.80244 3.00191 6.90442C3.38961 6.0064 3.93184 5.21872 4.62861 4.54137C5.3254 3.86401 6.1322 3.3329 7.04903 2.94805C7.96584 2.56318 8.94814 2.37074 9.99596 2.37074C11.0437 2.37074 12.0234 2.56318 12.935 2.94805C13.8466 3.3329 14.6508 3.86401 15.3475 4.54137C16.0443 5.21872 16.5892 6.0064 16.9821 6.90442C17.375 7.80244 17.5715 8.7646 17.5715 9.7909C17.5715 10.8172 17.375 11.7768 16.9821 12.6696C16.5892 13.5625 16.0443 14.3502 15.3475 15.0327C14.6508 15.7152 13.8466 16.2489 12.935 16.6337C12.0234 17.0186 11.0437 17.211 9.99596 17.211C8.94814 17.211 7.96584 17.0186 7.04903 16.6337C6.1322 16.2489 5.3254 15.7152 4.62861 15.0327C3.93184 14.3502 3.38961 13.5625 3.00191 12.6696C2.61424 11.7768 2.4204 10.8172 2.4204 9.7909Z" fill="none"/>
                      </svg>
                  }
                  
              </NavLink>
            </div>
            <div className="right-items">
              <NavLink
                className={ ( listBagItems > 0 ) ? ({ isActive }) => 'active-notification' + ( isActive ? ' active' : '') : '' }
                to="/bag"
                notification={ NewListBagItems }
              >
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.495605 19.618C0.495605 20.8092 0.798111 21.7025 1.40312 22.2981C2.00814 22.8936 2.91093 23.1914 4.11151 23.1914H17.228C18.2395 23.1914 19.0289 22.8936 19.5961 22.2981C20.1633 21.7025 20.4469 20.8092 20.4469 19.618V8.20312C20.4469 7.01201 20.1444 6.11867 19.5394 5.5231C18.9344 4.92754 18.0316 4.62975 16.831 4.62975H15.2003C15.1719 3.82622 14.9403 3.08885 14.5055 2.41767C14.0706 1.74648 13.4987 1.20764 12.7897 0.801145C12.0807 0.394653 11.3055 0.191406 10.4642 0.191406C9.63226 0.191406 8.86182 0.394653 8.15282 0.801145C7.44382 1.20764 6.87189 1.74648 6.43703 2.41767C6.00218 3.08885 5.77057 3.82622 5.74221 4.62975H4.11151C2.91093 4.62975 2.00814 4.92754 1.40312 5.5231C0.798111 6.11867 0.495605 7.01201 0.495605 8.20312V19.618ZM7.78414 4.62975C7.80304 4.15709 7.93539 3.73169 8.18119 3.35356C8.42697 2.97543 8.75074 2.67529 9.15251 2.45312C9.55428 2.23096 9.9915 2.11988 10.4642 2.11988C10.9463 2.11988 11.3859 2.23096 11.7829 2.45312C12.1799 2.67529 12.5014 2.97543 12.7471 3.35356C12.9929 3.73169 13.1253 4.15709 13.1442 4.62975H7.78414Z" fill="none"/>
                  </svg>


              </NavLink>
              <hr/>
              <button
                onClick={ toggleSidenav }
              >

                  <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.9586 3.06726C23.2473 3.06726 23.4927 2.96619 23.6949 2.76407C23.897 2.56196 23.998 2.31653 23.998 2.02777C23.998 1.73903 23.897 1.4936 23.6949 1.29147C23.4927 1.08934 23.2473 0.988281 22.9586 0.988281L2.03753 0.991746C1.74879 0.991746 1.50336 1.09281 1.30124 1.29493C1.09911 1.49706 0.998047 1.74249 0.998047 2.03123C0.998047 2.31999 1.09911 2.56543 1.30124 2.76753C1.50336 2.96966 1.74879 3.07072 2.03753 3.07072L22.9586 3.06726Z" fill="none"/>
                    <path d="M22.9586 16.8406C23.2473 16.8406 23.4927 16.7395 23.6949 16.5374C23.897 16.3353 23.998 16.0898 23.998 15.8011C23.998 15.5123 23.897 15.2669 23.6949 15.0648C23.4927 14.8626 23.2473 14.7616 22.9586 14.7616L2.03753 14.7651C1.74879 14.7651 1.50336 14.8661 1.30124 15.0682C1.09911 15.2704 0.998047 15.5158 0.998047 15.8045C0.998047 16.0933 1.09911 16.3387 1.30124 16.5409C1.50336 16.743 1.74879 16.844 2.03753 16.844L22.9586 16.8406Z" fill="none"/>
                    <path d="M22.9586 9.95391C23.2473 9.95391 23.4927 9.85286 23.6949 9.65075C23.897 9.44862 23.998 9.20318 23.998 8.91442C23.998 8.62568 23.897 8.38025 23.6949 8.17812C23.4927 7.976 23.2473 7.87493 22.9586 7.87493L2.03753 7.87493C1.74879 7.87493 1.50336 7.976 1.30124 8.17812C1.09911 8.38025 0.998047 8.62568 0.998047 8.91442C0.998047 9.20318 1.09911 9.44862 1.30124 9.65075C1.50336 9.85285 1.74879 9.95391 2.03753 9.95391H22.9586Z" fill="none"/>
                  </svg>


              </button>
            </div>
          </nav>

      </header>

      <div className={ sidenav ? 'backdrop_sidenav active' : 'backdrop_sidenav' } onClick={ toggleSidenav }>
        <motion.nav
          className={ sidenav ? 'sidenav active' : 'sidenav' }
          onClick={(e) => e.stopPropagation()}

          dragControls={drag}
          dragListener={false}
          drag='y'
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          dragElastic={{
            top: 0,
            bottom: 1,
          }}
          onDragEnd={(event, info) => {
            if (info.offset.y > 100) {
              toggleSidenav()
            }
          }}
          whileDrag={{ cursor: 'grabbing', }}
        >
          <motion.div
            className="sidenav_drag"
            onPointerDown={startDrag}
            whileTap={{ scale: 1.3, cursor: 'grabbing' }}
          >
            <div></div>
          </motion.div>
          <header>
            <NavLink className='sidenav_user' to='/account' onClick={ toggleSidenav }>
              <div className='user_img'>
                {
                  (!!photoURL === true)
                  
                  ? <img src={ photoURL } alt='' />

                  : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.3522 22.4447C14.9661 23.0433 13.4849 23.3425 11.9089 23.3425C10.3423 23.3425 8.86596 23.0433 7.47979 22.4447C6.09362 21.8462 4.87122 21.0149 3.81259 19.9509C2.75398 18.8868 1.92324 17.6612 1.32035 16.2741C0.71746 14.8871 0.416016 13.4097 0.416016 11.8422C0.416016 10.2746 0.71746 8.79726 1.32035 7.41017C1.92324 6.02309 2.75161 4.79753 3.80548 3.73348C4.85936 2.66942 6.07939 1.83812 7.46556 1.2396C8.85173 0.641066 10.3281 0.341797 11.8946 0.341797C13.4707 0.341797 14.9518 0.641066 16.338 1.2396C17.7242 1.83812 18.9489 2.66942 20.0123 3.73348C21.0757 4.79753 21.9088 6.02309 22.5117 7.41017C23.1146 8.79726 23.416 10.2746 23.416 11.8422C23.416 13.4097 23.1146 14.8871 22.5117 16.2741C21.9088 17.6612 21.078 18.8868 20.0194 19.9509C18.9608 21.0149 17.7384 21.8462 16.3522 22.4447ZM9.46648 21.0845C10.2782 21.2981 11.0924 21.4049 11.9089 21.4049C12.7159 21.4049 13.5277 21.2981 14.3442 21.0845C15.1607 20.8709 15.9369 20.5552 16.6727 20.1374C17.4085 19.7197 18.066 19.207 18.6451 18.5994C18.2369 17.9727 17.6933 17.4411 17.0145 17.0043C16.3356 16.5676 15.5595 16.2353 14.686 16.0074C13.8125 15.7796 12.8868 15.6656 11.9089 15.6656C10.912 15.6656 9.97681 15.7819 9.10333 16.0145C8.22985 16.2471 7.45606 16.5818 6.78196 17.0186C6.10787 17.4553 5.57143 17.9822 5.17267 18.5994C5.75182 19.207 6.4093 19.7197 7.14512 20.1374C7.88093 20.5552 8.65472 20.8709 9.46648 21.0845ZM9.95782 13.2232C10.537 13.5887 11.1873 13.7762 11.9089 13.7857C12.621 13.7952 13.269 13.6149 13.8529 13.2446C14.4368 12.8743 14.8972 12.3711 15.2343 11.735C15.5713 11.0988 15.7399 10.3773 15.7399 9.57026C15.7399 8.82021 15.569 8.13187 15.2272 7.50524C14.8854 6.87862 14.4249 6.37781 13.8458 6.00278C13.2666 5.62776 12.621 5.44025 11.9089 5.44025C11.1873 5.44025 10.537 5.62776 9.95782 6.00278C9.37867 6.37781 8.9182 6.87862 8.57641 7.50524C8.23459 8.13187 8.06369 8.82021 8.06369 9.57026C8.06369 10.3773 8.23459 11.0965 8.57641 11.7279C8.9182 12.3592 9.37867 12.8577 9.95782 13.2232Z" fill="none"/>
                    </svg>
                }
              </div>
              <span className='line-clamp_1 margin-right_thin'>
                {
                  (!!displayName === true)
                  ? displayName
                  : email
                }
              </span>
            </NavLink>
            <SelectLang />
            <button className="sidenav_button" onClick={ onLogout }>
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.81081 23.584H15.1198C16.2657 23.584 17.1251 23.2952 17.6981 22.7177C18.2711 22.1402 18.5575 21.2694 18.5575 20.1053V13.3117H10.8499C10.5225 13.3117 10.2406 13.1912 10.0042 12.9502C9.7677 12.7092 9.64947 12.4205 9.64947 12.084C9.64947 11.7475 9.7677 11.4587 10.0042 11.2177C10.2406 10.9767 10.5225 10.8562 10.8499 10.8562H18.5575V4.06264C18.5575 2.90763 18.2711 2.03911 17.6981 1.45706C17.1251 0.875009 16.2657 0.583984 15.1198 0.583984H3.81081C2.66489 0.583984 1.80773 0.875009 1.23933 1.45706C0.670924 2.03911 0.386719 2.90763 0.386719 4.06264V20.1053C0.386719 21.2694 0.670924 22.1402 1.23933 22.7177C1.80773 23.2952 2.66489 23.584 3.81081 23.584ZM17.589 12.084C17.589 12.3477 17.6822 12.5751 17.8686 12.7661C18.0551 12.9571 18.2802 13.0525 18.5439 13.0525H21.5042L23.1275 12.9707L22.5136 13.5573L20.8903 15.0579C20.6993 15.2216 20.6038 15.4399 20.6038 15.7127C20.6038 15.9673 20.6834 16.1788 20.8425 16.347C21.0017 16.5153 21.204 16.5994 21.4496 16.5994C21.6861 16.5994 21.8998 16.5039 22.0908 16.3129L25.4603 12.7934C25.5875 12.666 25.6739 12.5478 25.7193 12.4387C25.765 12.3295 25.7878 12.2113 25.7878 12.084C25.7878 11.9567 25.765 11.8384 25.7193 11.7293C25.6739 11.6202 25.5875 11.5019 25.4603 11.3746L22.0908 7.85504C21.8998 7.66406 21.6861 7.56856 21.4496 7.56856C21.204 7.56856 21.0017 7.65041 20.8425 7.81411C20.6834 7.97781 20.6038 8.18699 20.6038 8.44164C20.6038 8.72357 20.6993 8.94639 20.8903 9.11009L22.5136 10.6107L23.1275 11.1973L21.5042 11.1154H18.5439C18.2802 11.1154 18.0551 11.2109 17.8686 11.4019C17.6822 11.5929 17.589 11.8202 17.589 12.084Z" fill="black"/>
              </svg>
            </button>
            <hr/>
            <button className="sidenav_button" onClick={ toggleSidenav }>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5968 22.7005C0.889656 22.9812 1.24354 23.1215 1.65846 23.1215C2.07338 23.1215 2.42116 22.9812 2.70182 22.7005L11.6711 13.7129L20.6587 22.7005C20.9393 22.9812 21.2871 23.1245 21.7021 23.1306C22.117 23.1367 22.4648 22.9934 22.7454 22.7005C23.0261 22.4076 23.1664 22.0568 23.1664 21.648C23.1664 21.2392 23.0261 20.8944 22.7454 20.6137L13.7578 11.6262L22.7454 2.65687C23.0261 2.36402 23.1695 2.01013 23.1756 1.59521C23.1817 1.18032 23.0383 0.832534 22.7454 0.551849C22.4525 0.27119 22.1017 0.130859 21.6929 0.130859C21.2841 0.130859 20.9393 0.27119 20.6587 0.551849L11.6711 9.53943L2.70182 0.551849C2.42116 0.27119 2.07033 0.130859 1.64931 0.130859C1.2283 0.130859 0.87746 0.27119 0.5968 0.551849C0.316121 0.84473 0.175781 1.19557 0.175781 1.60436C0.175781 2.01318 0.316121 2.36402 0.5968 2.65687L9.58438 11.6262L0.5968 20.6137C0.316121 20.8944 0.175781 21.2422 0.175781 21.6571C0.175781 22.072 0.316121 22.4198 0.5968 22.7005Z" fill="none"/>
              </svg>
            </button>
          </header>
          <ul className='sidenav_items'>
              
              <h2 className='sidenav_section-divider'>Sections</h2>

              <NavLink className={ ({ isActive }) => 'sidenav_item' + ( isActive ? ' active' : '') } to="/" onClick={ toggleSidenav }>
                <li>What's new?</li>
              </NavLink>

              <h2 className='sidenav_section-divider'>Shoes</h2>

              <NavLink className={ ({ isActive }) => 'sidenav_item' + ( isActive ? ' active' : '') } to="/shoes/mens" onClick={ toggleSidenav }>
                <li>Mens</li>
              </NavLink>
              <NavLink className={ ({ isActive }) => 'sidenav_item' + ( isActive ? ' active' : '') } to="/shoes/womens" onClick={ toggleSidenav }>
                <li>Womens</li>
              </NavLink>

          </ul>
        </motion.nav>
      </div>

    </>
  )
}
