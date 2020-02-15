import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SignUp.module.css';
import axios from 'axios';

const SignUp = () => {
    const [returnSecureToken] = useState(true);
    return (
        <div className={styles.RegContainer}>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', passwordConfirm: '' }}
                // initialValues={{ email: '', password: ''}}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'не более 15 символов')
                        .required('Обязательное поле'),
                    lastName: Yup.string()
                        .max(20, 'не более 20 символов')
                        .required('Обязательное поле'),
                    email: Yup.string()
                        .email('Введите правильный email')
                        .required('Обязательное поле'),
                    password: Yup.string().required('Password is required'),
                    passwordConfirm: Yup.string()
                        .oneOf([Yup.ref('password'), null])
                        .required('Password confirm is required')
                })}


                onSubmit={async (values, { setSubmitting, resetForm }) => {

                    try {
                        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANHxXfZwHfMqKI21Jufqk21CEfEoQwYZs', values, returnSecureToken)
                        console.log(response.data)
                    }
                    catch (e) {
                        console.log(e)
                    }

                    setSubmitting(false)
                    resetForm(values)
                }}
            >

                <Form className={styles.RegForm}>
                    <span>Регистрация</span>
                    <label htmlFor="firstName">Имя</label>
                    <Field name="firstName" type="text" placeholder="Введите имя" />
                    <ErrorMessage name="firstName" />
                    <label htmlFor="lastName">Фамилия</label>
                    <Field name="lastName" type="text" placeholder="Введите фамилию" />
                    <ErrorMessage name="lastName" />
                    <label htmlFor="email">E-mail</label>
                    <Field name="email" type="email" placeholder="Введите Email" />
                    <ErrorMessage name="email" />
                    <label htmlFor="password">Пароль</label>
                    <Field name="password" type="password" placeholder="Введите пароль" />
                    <ErrorMessage name="password" />
                    <label htmlFor="passwordConfirm">Повторите пароль</label>
                    <Field name="passwordConfirm" type="password" placeholder="Введите пароль" />
                    <ErrorMessage name="passwordConfirm" />
                    <button type="submit">Зарегистрироваться</button>
                    <a href='/'>Вернуться</a>
                </Form>
            </Formik>
        </div>
    );
};


export default SignUp;