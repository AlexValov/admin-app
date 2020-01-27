import React from 'react';
import styles from './Registration.module.css';

const Registration = () => {
    return (
        <div className={styles.RegContainer}>
            <form className={styles.RegForm}>
                <span>Регистрация</span>

                <label htmlFor="firstname">Имя</label>
                <input type="text" placeholder="Введите имя" name="firstname" required />

                <label htmlFor="lastname">Фамилия</label>
                <input type="text" placeholder="Введите фамилию" name="lastname" required />

                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="Введите Email" name="email" required />

                <label htmlFor="psw">Пароль</label>
                <input type="password" placeholder="Введите пароль" name="psw" required />

                <label htmlFor="psw2">Повторите пароль</label>
                <input type="password" placeholder="Введите пароль" name="psw2" required />

                <button type="submit" >Зарегистрироваться</button>
                <a href='/'>Вернуться</a>
            </form>
        </div>
    )
}

export default Registration;