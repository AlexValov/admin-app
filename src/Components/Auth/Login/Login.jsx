import React, {useState} from 'react';
import styles from './Login.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from './../../../axios/axios-link'

const Login = () => {
    const [returnSecureToken] = useState(true);
    return (
        <div className={styles.LoginContainer}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Введите правильный email')
                        .required('Обязательное поле'),
                    password: Yup.string().required('Password is required'),
                })}

                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyANHxXfZwHfMqKI21Jufqk21CEfEoQwYZs', values, returnSecureToken)
                    }
                    catch (e) {
                        console.log(e)
                    }
                    setSubmitting(false)
                    resetForm(values)
                }}
            >
                <Form className={styles.LoginForm}>
                    <span>Вход</span>
                    <label htmlFor="email">E-mail</label>
                    <Field name="email" type="email" placeholder="Введите Email" />
                    <ErrorMessage name="email" />
                    <label htmlFor="password">Пароль</label>
                    <Field name="password" type="password" placeholder="Введите пароль" />
                    <ErrorMessage name="password" />
                    <button type="submit" >Войти</button>
                    <a href='/'>Зарегистрироваться</a>
                </Form>
            </Formik>
        </div>
    )
}

export default Login;