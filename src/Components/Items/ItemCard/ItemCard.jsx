import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ItemCard.module.css';
import { Link } from 'react-router-dom';
import Loader from '../../UI/Loader/Loader';
import {fetchDataById} from '../../../Redux/Actions/carAction'


const ItemCard = (props) => {

    const {car, loading} = useSelector((state)=> state.cars)
      
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDataById(props.match.params.id))
     }, [dispatch]);


    return (
        <Fragment>
            {
                loading && !car 
                ? <Loader />
                    : (
                        <div className={styles.CardContainer}>
                            <div className={styles.CardElement0}>
                            <Link to='/item-list'>Вернуться</Link>

                            </div>
                            <div className={styles.CardElement1}>
                                <hr />
                            </div>

                            <div className={styles.CardElement2}>
                                <img alt="ddd" src='https://ecotechnica.com.ua/images/-foto1/939-hyundai-kona-electric-ecotechnica-com-ua-5.jpg' />
                            </div>

                            <div className={styles.CardElement3}>
                                <span>{car.name}</span>
                                <p>{car.description}</p>
                            </div>

                            <div className={styles.CardElement4}>
                                <div>
                                    <div className={styles.OptionName}><span>Цвет авто</span></div>
                                    <select className={styles.OptionValue}>
                                        <option>Пункт 1</option>
                                        <option>Пункт 2</option>
                                    </select>
                                </div>
                                <div>
                                    <div className={styles.OptionName}><span ></span></div>
                                    <span className={styles.OptionValue}>2017</span>
                                </div>
                                <div>
                                    <div className={styles.OptionName}><span >Тип топлива</span></div>
                                    <span className={styles.OptionValue}>Бензин</span>
                                </div>
                                <div>
                                    <div className={styles.OptionName}><span >Стоимость</span></div>
                                    <span className={styles.OptionValuePrice}>{car.price} $</span>
                                </div>

                            </div>
                            <div className={styles.CardElement5}>
                                <button>Беру!</button>
                            </div>
                        </div>
                    )
            }
        </Fragment>
)}

export default ItemCard;


// Hyundai Kona Electric
// В комплектации Express с батареей 39.2 кВт*ч покупателю будут доступны система подогрева АКБ, система рекуперации энергии при торможении, 6 подушек безопасности, ABS, ESC, HAC, система предупреждения о выходе из полосы движения, двухзонный климат-контроль, выбор режима вождения Drive Mode Select.