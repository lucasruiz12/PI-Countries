import axios from 'axios';

export function getCountries() {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries`);
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: response.data
        })
    }
}

export function getDetail(id) {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: 'GET_DETAIL',
            payload: response.data
        })
    }
}

export function getName(name) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: 'GET_NAME',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function orderAZ() {
    return { type: 'ORDER_AZ' };
}

export function orderZA() {
    return { type: 'ORDER_ZA' }
}

export function orderPop() {
    return { type: 'ORDER_POP' }
}

export function orderPopReverse() {
    return { type: 'ORDER_POP_REVERSE' }
}

export const orderContinent = (payload) => {
    return {
        type: 'ORDER_CONTINENT',
        payload
    }
}

export function createActivity(activity) {
    console.log('Creando la activity: ', activity)
    return async function () {
        try {
            console.log("Body del form y activity");
            const newActivity = await axios.get('http://localhost:3001/activity/')
            console.log('Actividad creada 😁. Creaste: ', newActivity)
        } catch (error) {
            console.log(error);
        }
    }
}