import { createStore } from 'redux';


const initialState = {
    carsData: [
        { id: 1, name: 'Ford', price: 10000, description: "Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
        { id: 2, name: 'Ford2', price: 100002, description: "2Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
        { id: 3, name: 'Opel', price: 10220, description: "Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
      ]
} 

export const store = createStore(
    reducer,
    initialState
) 

// можно деструктурировать function reducer(state, {type, payload})
function reducer(state, action) {
    
    
    switch(action.type){
        case 'ADD_CAR':
           
            return {
                ...state,
                carsData: [...state.carsData, action.payload]
            }

        case 'DELETE_CAR':
            
            console.log(action.carId)
            return {
                ...state,
                carsData: state.carsData.filter(car => car.id !== action.payload)
            }

        default:
            return state;
    }
}

export const addCarAction = (car) => ({
    type: 'ADD_CAR',
    payload: car
})

export const deleteCarAction = (carId) => ( {
    type: 'DELETE_CAR',
    payload: carId
})
