import axios from '../../axios/axios-link';
import{FETH_CARS_START, FETH_CARS_SUCCESS, FETH_CARS_ERROR}  from './actionTypes'

export function fetchData() {

    return async dispatch => {
        dispatch(fetchCarStart())
        try {
            const result = await axios.get('/cars.json');
            const cars = result.data
            dispatch(fetchCarSuccess(cars))
        }
        catch (e) {
            dispatch(fetchCarError(e))
        }
    }
} 

export function fetchCarStart () {
    return {
        type: FETH_CARS_START
    }
}

export function fetchCarSuccess (cars) {
    return {
        type: FETH_CARS_SUCCESS,
        payload: cars
    }
}

export function fetchCarError (e) {
    return {
        type: FETH_CARS_ERROR,
        payload: e
    }

}