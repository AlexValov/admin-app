import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SignUp.module.css';

const SignUp = () => {

    return (
        <div className={styles.RegContainer}>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password1: '', password2: '' }}
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
                        password1: Yup.string()
                        .required('Обязательное поле'),
                        password2: Yup.string()
                        .required('Обязательное поле'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >

                <Form form className={styles.RegForm}>
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
                    <label htmlFor="password1">Пароль</label>
                    <Field name="password1" type="password" placeholder="Введите пароль" />
                    <ErrorMessage name="password1" />
                    <label htmlFor="password2">Повторите пароль</label>
                    <Field name="password2" type="password" placeholder="Введите пароль" />
                    <ErrorMessage name="password2" />
                    <button type="submit">Зарегистрироваться</button>
                    <a href='/'>Вернуться</a>
                </Form>
            </Formik>
        </div>
    );
};


export default SignUp;