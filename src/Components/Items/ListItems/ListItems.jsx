import React from 'react';
import styles from './ListItems.module.css'

const ListItems = () => {
    return (
        // <div className={styles.ListItems}>
        // <header> 
        //     <button className={styles.NavButton}>Листинг товаров</button>
        //     <button className={styles.NavButton}>Листинг проперти</button>
        // </header>
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
                    <tr><td><a href='/'>FORD MUSTANG STAR</a></td><td>50 000$</td><td>10.12.2019</td><td><a href='/'>Ред.</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='/'>Удалить</a></td></tr>
                    <tr><td><a href='/'>FORD MUSTANG STAR</a></td><td>50 000$</td><td>10.12.2019</td><td><a href='/'>Ред.</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='/'>Удалить</a></td></tr>
                    <tr><td><a href='/'>FORD MUSTANG STAR</a></td><td>50 000$</td><td>10.12.2019</td><td><a href='/'>Ред.</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='/'>Удалить</a></td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListItems;


