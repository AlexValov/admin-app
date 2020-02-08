
import React, { useState } from 'react';
import styles from './AddItem.module.css';

import { addCarAction } from '../../../redux'
import { useDispatch } from 'react-redux'


const AddItem = () => {

    const initialFormState = { id: null, name: '', price: '', description: "" }

// используем useState и передаем в качестве начального значения объект - initialFormState
const [car, setCar] = useState(initialFormState)

// const addCar = useDispatch((car) => addCarAction(car))
const dispatch = useDispatch()


const handleInputChange = event => {
    const { name, value } = event.currentTarget
    setCar({ ...car, [name]: value })
}

const handleSubmit = event => {
    event.preventDefault()
    if (!car.name || !car.price || !car.description) return

    // // вызываем addUser из хука из App
    // props.addCar(car)
    // // обнуляем форму, с помощью setUser функции
    // // которая у нас взята из хука в данном компоненте [1]
    // setCar(initialFormState)
    
    // addCar({car})
    car.id = Math.random(2323)
    dispatch(addCarAction(car))
    setCar(initialFormState)

  }

return (
    <div className={styles.AddItem}>
        <div className={styles.ElementButtons}>
            <button className={styles.ReturnButton}>Вернуться</button>
            <button className={styles.SaveButton}>Сохранить</button>
        </div>
        <div className={styles.AddItemElement2}>
            <div>
                <form onSubmit={handleSubmit} className={styles.AddItemForm}>
                    <span>Добавление товара</span>

                    <label htmlFor="name">Название товара</label>
                    <input
                        type="text"
                        placeholder="Mercedes S550 4matic"
                        name="name"
                        value={car.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="price">Стоимость товара</label>
                    <input
                        type="number"
                        placeholder="113 000"
                        name="price"
                        value={car.price}
                        onChange={handleInputChange}
                        required
                    />
                    {/* 
                <label htmlFor="itemimage">Изображение</label>
                <input 
                type="text" 
                placeholder="image" 
                name="itemimage" 
                required 
                /> */}

                    <label htmlFor="description">Описание</label>
                    <textarea
                        type="text"
                        placeholder="Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации"
                        name="description"
                        value={car.description}
                        onChange={handleInputChange}
                        required
                    />
                     <button type="submit" className={styles.SaveButton}>Сохранить</button>
                </form>

            </div>
        </div>
    </div>
)
}

export default AddItem;
