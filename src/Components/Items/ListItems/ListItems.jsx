import React from 'react';
import styles from './ListItems.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCarAction } from '../../../redux'

const ListItems = () => {
    const cars = useSelector((state)=> state.carsData)
 
    const dispatch = useDispatch()
        return (
        <div className={styles.ListItems}>
            <header>
                <button className={styles.NavButton}>Листинг товаров</button>
                <button className={styles.NavButton}>Листинг проперти</button>
            </header>
            <div className={styles.Container}>
                <div className={styles.Menu}>
                    <button>Добавить товар</button>
                </div>

                <table border="1">
                    <thead>
                        <tr>
                            <th>Перечень товаров</th>
                            <th>Стоимость</th>
                            <th>Дата изменения</th>
                            <th>Управление</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(car => (
                            < tr key={car.id} >
                                <td><a href='/'>{car.name}</a></td>
                                <td>{car.price}</td>
                                <td>10.12.2019</td>
                                <td>
                                    <a href='/'>Ред.</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style= {{cursor: 'pointer'}} onClick={() => dispatch(deleteCarAction(car.id))}  >Удалить</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ListItems;


