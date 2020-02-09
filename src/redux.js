import { createStore } from 'redux';


const initialState = {
    carsData: [
        { id: 1, name: 'Ford', price: 10000, image: null, description: "Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
        { id: 2, name: 'Ford2', price: 100002, image: null, description: "2Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
        { id: 3, name: 'Opel', price: 10220, image: null, description: "Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
      ]
} 

 
//reducer
// можно деструктурировать function reducer(state, {type, payload})
const reducer = (state, action) => {
    
    
    switch(action.type){
        case 'ADD_CAR':
  
            return {
                ...state,
                carsData: [...state.carsData, action.payload]
            }

        case 'DELETE_CAR':
            return {
                ...state,
                carsData: state.carsData.filter(car => car.id !== action.payload)
            }

        default:
            return state;
    }
}
  

// create store
export const store = createStore(
    reducer,
    initialState
)  



// подпиались на изменения в консоли
store.subscribe(()=> {
    console.log('Subscribe', store.getState())
})


//Actions
export const addCarAction = (car) => ({
    type: 'ADD_CAR',
    payload: car
})

export const deleteCarAction = (carId) => ( {
    type: 'DELETE_CAR',
    payload: carId
})
