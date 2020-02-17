// import {useState} from 'react'
import { FETH_CARS_START, FETH_CARS_SUCCESS, FETH_CARS_ERROR, FETH_CAR_SUCCESS } from '../../Redux/Actions/actionTypes'

const initialState = {
    cars: [],
    loading: false,
    error: null,
    car: null
}

export default function carReducer(state = initialState, action) {
   
    switch (action.type) {
        case FETH_CARS_START:
            return {
                ...state
                , loading: true
            }
        case FETH_CARS_SUCCESS:
            
            return {
                ...state,
                loading: false,
                cars: action.payload
                 }
         
        case FETH_CARS_ERROR:
            return {
                ...state, loading:false, error: action.error
            }
            
        case FETH_CAR_SUCCESS:
            return {
                ...state,
                loading: false,
                car: action.payload
                 }

        default:
            return state
    }
}
