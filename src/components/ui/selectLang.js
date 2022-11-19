import { useDispatch, useSelector } from 'react-redux';
import { startGetLang } from "../../store/lang";
import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from 'react-intl';

export const SelectLang = () => {

    const { lang, isLoading } = useSelector( state => state.lang );
    const dispatch = useDispatch();
    const intl = useIntl();

    const selectOptions = [
        { value: 'es', label: <FormattedMessage id='App.LangSpaMessage'/> },
        { value: 'en', label: <FormattedMessage id='App.LangEngMessage'/> },
    ]

    return (
        <>
            {
                isLoading
                ?   <button className='select_loader'>
                        <motion.span
                            animate={{ opacity: 1, rotate: 360 }}
                            transition={{ repeat: Infinity, ease: 'linear', duration: 1.1 }}
                        >
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.765625 13.582C0.765625 18.8532 5.00425 23.0918 10.2482 23.0918C15.4921 23.0918 19.7308 18.8532 19.7308 13.582C19.7308 12.9979 19.3232 12.5767 18.7119 12.5767C18.1413 12.5767 17.7745 12.9979 17.7745 13.582C17.7745 17.7663 14.4189 21.1219 10.2482 21.1219C6.09109 21.1219 2.72192 17.7663 2.72192 13.582C2.72192 9.41135 6.09109 6.05575 10.2482 6.05575C10.9682 6.05575 11.5932 6.09651 12.1637 6.2188L9.29723 9.04453C9.10703 9.23473 9.01193 9.47927 9.01193 9.7238C9.01193 10.2808 9.43308 10.702 9.97649 10.702C10.2754 10.702 10.5063 10.6069 10.6693 10.4302L14.9759 6.13727C15.1661 5.94708 15.2476 5.71612 15.2476 5.43083C15.2476 5.17271 15.1525 4.9146 14.9759 4.73798L10.6693 0.39067C10.5063 0.200474 10.2618 0.0917969 9.96291 0.0917969C9.43308 0.0917969 9.01193 0.540107 9.01193 1.09712C9.01193 1.35523 9.10703 1.59976 9.28365 1.78996L11.7698 4.23534C11.2807 4.14024 10.7644 4.09948 10.2482 4.09948C5.00425 4.09948 0.765625 8.32451 0.765625 13.582Z" fill="none"/>
                            </svg>
                        </motion.span>
                    </button>
                :   <select
                        name='lang'
                        className='lang_select'
                        onChange={
                            (e) => {
                                e.preventDefault()
                                dispatch(startGetLang(e.target.value))
                            }
                        }
                        value={
                            lang !== 'es'
                            ? 'en'
                            : 'es'
                        }
                    >
                    <optgroup dir="ltr" label={
                        intl.formatMessage({
                            id: 'App.LangMessage'
                        })
                    }>
                        {
                            selectOptions.map((select, index) => (
                                <option
                                    value={select.value}
                                    key={index}
                                    dir="ltr"
                                >
                                    {select.label}.
                                </option>
                            ))
                        }
                    </optgroup>
                    </select>
            }
        </>
    )
}