import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.LoginContainer}>
            <form className={styles.LoginForm}>
                <span>Вход</span>
                <label htmlFor="email">Логин</label>
                <input type="text" placeholder="Введите Email" name="email" required />

                <label htmlFor="psw">Пароль</label>
                <input type="password" placeholder="Введите пароль" name="psw" required />

                <button type="submit" >Войти</button>
                <a href='/'>Зарегистрироваться</a>
            </form>
        </div>
    )
}

export default Login;