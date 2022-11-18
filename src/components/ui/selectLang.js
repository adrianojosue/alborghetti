import { useDispatch, useSelector } from 'react-redux';
import { startGetLang } from "../../store/lang";

export const SelectLang = () => {

    const { lang } = useSelector( state => state.lang );
    const dispatch = useDispatch();

    const selectOptions = [
        { value: 'es', label: 'ES' },
        { value: 'en', label: 'EN' },
    ]

    return (
        <select
            name='lang'
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
            {
                selectOptions.map((select, index) => (
                    <option
                        value={select.value}
                        key={index}
                    >
                        {select.label}
                    </option>
                ))
            }
        </select>
    )
}