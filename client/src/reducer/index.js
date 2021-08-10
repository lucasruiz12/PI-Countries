import { orderAZ, orderContinent, orderPop, orderPopReverse, orderZA } from "../actions";

const initialState = {
    countries: [],
    countryDetail: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                countryDetail: action.payload
            }
        case 'GET_NAME':
            return {
                ...state,
                countries: action.payload
            }
        case 'ORDER_AZ':
            return {
                ...state,
                countries: state.countries.slice().sort(orderAZ)
            }
        case 'ORDER_ZA':
            return {
                ...state,
                countries: state.countries.slice().sort(orderZA).reverse()
            }
        case 'ORDER_POP':
            return {
                ...state,
                countries: state.countries.slice().sort(orderPop)
            }
        case 'ORDER_POP_REVERSE':
            return {
                ...state,
                countries: state.countries.slice().sort(orderPopReverse).reverse()
            }
        case 'ORDER_CONTINENT':
            return {
                ...state,
                countries: state.countries.filter((el) => el.continent === action.payload)
            }
        case 'SHOW_ACTIVITY':
            return {
                ...state,
                countries: state.countries.filter((el) => {
                    return el.activities.some((e) => e.name === action.payload)
                })
            }
        default:
            return state;
    }
}

export default rootReducer;