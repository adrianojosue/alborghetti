import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { GetItemByName } from '../../helpers/GetItemByName';
import { ShoesCards } from '../../components/shoes/ShoesCards';

import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from 'react-intl';

export const SearchScreen = () => {

  const inputSearchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const intl = useIntl();

  useEffect(() => {
    inputSearchRef.current.focus();
    inputSearchRef.current.select();
  }, [inputSearchRef]);

  const { q = '' } = queryString.parse( location.search );
  const shoes = GetItemByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {

    event.preventDefault();
    
    navigate(`?q=${ searchText.toLowerCase().trim() }`);

  };

  return (
    <div className="content_stretch">

      <form className="search_form" onSubmit={ onSearchSubmit } >
        <input
          type="text"
          ref={ inputSearchRef }
          placeholder={
            intl.formatMessage({
              id: 'SearchScreen.SearchInput'
            })
          }
          className="search_input"
          name="searchText"
          autoComplete="off"
          value={ searchText }
          onChange={ onInputChange }
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              inputSearchRef.current.focus();
              inputSearchRef.current.select();
            }
          }}
          onBlur={() => {
            inputSearchRef.current.focus();
            inputSearchRef.current.select();
          }}
        />
        <div className='search_form_options'>
          <button onClick={() => {
            inputSearchRef.current.focus();
            inputSearchRef.current.select();
          }}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9.7909C0 11.1354 0.259334 12.4003 0.778001 13.5856C1.29664 14.771 2.01437 15.8127 2.9312 16.7107C3.84802 17.6087 4.90891 18.3092 6.11387 18.8121C7.31882 19.3149 8.61285 19.5664 9.99596 19.5664C11.0542 19.5664 12.0653 19.4124 13.0293 19.1046C13.9933 18.7967 14.8787 18.3656 15.6854 17.8114L21.5321 23.5536C21.6998 23.7075 21.8831 23.8204 22.0822 23.8922C22.2813 23.9641 22.4856 24 22.6952 24C23.1562 24 23.5334 23.8512 23.8268 23.5536C24.1202 23.2559 24.2669 22.8813 24.2669 22.4298C24.2669 22.2142 24.2276 22.0115 24.149 21.8217C24.0704 21.6318 23.963 21.465 23.8268 21.3214L18.0116 15.61C18.6298 14.7992 19.1117 13.8987 19.4575 12.9083C19.8033 11.9179 19.9762 10.8788 19.9762 9.7909C19.9762 8.43618 19.7168 7.1687 19.1982 5.98844C18.6795 4.80821 17.9644 3.76908 17.0528 2.87106C16.1412 1.97306 15.0803 1.27005 13.8702 0.76203C12.6599 0.25401 11.3685 0 9.99596 0C8.61285 0 7.31882 0.25401 6.11387 0.76203C4.90891 1.27005 3.84802 1.97306 2.9312 2.87106C2.01437 3.76908 1.29664 4.80821 0.778001 5.98844C0.259334 7.1687 0 8.43618 0 9.7909ZM2.4204 9.7909C2.4204 8.7646 2.61424 7.80244 3.00191 6.90442C3.38961 6.0064 3.93184 5.21872 4.62861 4.54137C5.3254 3.86401 6.1322 3.3329 7.04903 2.94805C7.96584 2.56318 8.94814 2.37074 9.99596 2.37074C11.0437 2.37074 12.0234 2.56318 12.935 2.94805C13.8466 3.3329 14.6508 3.86401 15.3475 4.54137C16.0443 5.21872 16.5892 6.0064 16.9821 6.90442C17.375 7.80244 17.5715 8.7646 17.5715 9.7909C17.5715 10.8172 17.375 11.7768 16.9821 12.6696C16.5892 13.5625 16.0443 14.3502 15.3475 15.0327C14.6508 15.7152 13.8466 16.2489 12.935 16.6337C12.0234 17.0186 11.0437 17.211 9.99596 17.211C8.94814 17.211 7.96584 17.0186 7.04903 16.6337C6.1322 16.2489 5.3254 15.7152 4.62861 15.0327C3.93184 14.3502 3.38961 13.5625 3.00191 12.6696C2.61424 11.7768 2.4204 10.8172 2.4204 9.7909Z" fill="none"/>
            </svg>
          </button>
        </div>
      </form>


      <div className="content_normal">
        {
          ( q === '' )
          ? <motion.div className="message" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <p><FormattedMessage id='SearchScreen.IndicationMessage'/></p>
            </motion.div>
          : ( shoes.length === 0 ) &&  <motion.div className="message" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><p><FormattedMessage id='SearchScreen.ErrorMessage'/></p><h1><b>"{ q }"</b></h1></motion.div>
        }

        <div className="space"></div>

        {
          shoes.length !== 0 &&
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><FormattedMessage id='SearchScreen.ResultMessage'/>: <span>{q}</span></motion.h1>
        }

        <section className="cards-grid">
            {
              shoes.map( shoe => (
                <ShoesCards
                key={shoe.id}
                { ...shoe }
                />
                ))
            }
        </section>
      </div>
      
    </div>
  )
}
