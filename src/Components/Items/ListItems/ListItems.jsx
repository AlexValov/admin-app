import React, { useEffect, useState } from 'react';
import axios from '../../../axios/axios-link';
import styles from './ListItems.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCarAction } from '../../../redux';
import Loader from '../../UI/Loader/Loader';


const ListItems = () => {
    // const cars = useSelector((state)=> state.carsData)
    const dispatch = useDispatch()

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/cars.json');
            setCars(result.data);
            setLoading(false);
            
        };
        fetchData();
    }, []);

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

                <table border="1">
                    <thead>
                        <tr>
                            <th>Перечень товаров</th>
                            <th>Стоимость</th>
                            <th>Дата изменения</th>
                            <th>Управление</th>
                        </tr>
                    </thead>
                    {
                        loading ? (<Loader />)
                        : (
                    <tbody>
                        {Object.keys(cars).map(car => (
                            < tr key={cars[car].name} >
                                <td><NavLink to={`/item-card/${car}/`}>{cars[car].name}</NavLink></td>
                                <td>{cars[car].price}</td>
                                <td><img src={car.image} /></td>
                                <td>
                                    <a href='/'>Ред.</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteCarAction(car.id))}  >Удалить</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    )}
                </table>
                
            </div>
        </div >
    )
}

export default ListItems;


