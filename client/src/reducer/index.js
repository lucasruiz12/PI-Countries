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
    }
}

export default rootReducer;