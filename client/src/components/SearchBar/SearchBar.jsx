import React from 'react';
import { useDispatch } from 'react-redux';
import { getCountries, getName } from '../../actions';

const SearchBar = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (el) => {
        setInput(el.target.value);
    };
    const onClickHandler = () => {
        dispatch(getName(input));
    };
    const homeHandler = () => {
        dispatch(getCountries());
    };

    return (
        <div className={style.allInputs}>
            <input
                className={style.inputText}
                type="text"
                placeholder="Search by name"
                name="input"
                autocomplete="off"
                onChange={(el) => inputHandler(el)}
            />
            <div>
                <button className={style.buttonSearch} onClick={() => onClickHandler()}>
                    Search 🔎
                </button>
                <button className={style.buttonSearch} onClick={() => homeHandler()}>
                    Reset 🔁
                </button>
            </div>
        </div>
    )
}

export default SearchBar;