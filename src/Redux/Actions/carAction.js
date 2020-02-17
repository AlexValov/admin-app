import axios from '../../axios/axios-link';
import { FETH_CARS_START, FETH_CARS_SUCCESS, FETH_CARS_ERROR, FETH_CAR_SUCCESS } from './actionTypes'

export function fetchData() {

    return async dispatch => {
        dispatch(fetchCarsStart())
        try {
            const result = await axios.get('/cars.json');
            const cars = result.data
            dispatch(fetchCarsSuccess(cars))
        }
        catch (e) {
            dispatch(fetchCarsError(e))
        }
    }
}

export function fetchDataById(carId) {
   
    return async dispatch => {
        dispatch(fetchCarsStart())
        try {
            const result = await axios.get(`/cars/${carId}.json`);
            const car = result.data
                        
            dispatch(fetchCarSuccess(car))
        }
        catch (e) {
            dispatch(fetchCarsError(e))
        }
    };
}

export function fetchCarSuccess(car) {
    return {
        type: FETH_CAR_SUCCESS,
        payload: car
    }
}

export function fetchCarsStart() {
    return {
        type: FETH_CARS_START
    }
}

export function fetchCarsSuccess(cars) {
    return {
        type: FETH_CARS_SUCCESS,
        payload: cars
    }
}

export function fetchCarsError(e) {
    return {
        type: FETH_CARS_ERROR,
        payload: e
    }

}