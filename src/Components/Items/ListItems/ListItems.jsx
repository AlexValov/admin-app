import React, { useEffect } from 'react';
import styles from './ListItems.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCarAction } from '../../../redux';
import Loader from '../../UI/Loader/Loader';
import {fetchData} from '../../../Redux/Actions/carAction'


const ListItems = () => {

    const {cars, loading} = useSelector((state)=> state.cars)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
     }, [dispatch]);
 
 

    return (
        <div className={styles.ListItems}>
            <header>
                <button className={styles.NavButton}>Листинг товаров</button>
                <button className={styles.NavButton}>Листинг проперти</button>
            </header>
            <div className={styles.Container}>
                <div className={styles.Menu}>
                    <button><NavLink to='/add-item'>Добавить товар</NavLink></button>
                </div>
                {
                        loading && cars.lenght !==20
                        ? <Loader />
                        : 
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
                        {Object.keys(cars).map(car => (
                            < tr key={cars[car].name} >
                                <td><NavLink to={`/item-card/${car}/`}>{cars[car].name}</NavLink></td>
                                <td>{cars[car].price}</td>
                                <td> img</td>
                                <td>
                                    <a href='/'>Ред.</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteCarAction(car.id))}  >Удалить</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                   
                </table>
                 }
            </div>
        </div >
    )
}

export default ListItems;


