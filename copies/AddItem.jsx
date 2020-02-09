
import React from 'react';
import styles from './AddItem.module.css';
import { addCarAction } from '../../../redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const AddItem = () => {
    const dispatch = useDispatch()
    return (
        <Formik
        initialValues= {{id: null, name: '', price: '', description: '' }}
        validationSchema={Yup.object({
            name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            price: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            description: Yup.string()
            .required('Required'),
        })}

    onSubmit = {(values, { setSubmitting, resetForm }) => {
     
            dispatch(addCarAction(values))
        setSubmitting(false)
        resetForm (values)
      }}
      >

    <Form>
      <label htmlFor="name">Название</label>
      <Field name="name" type="text" placeholder="Jane"/>
      <ErrorMessage name="firstName" />
      <label htmlFor="price">Цена</label>
      <Field name="price" type="number" placeholder="Jane"/>
      <ErrorMessage name="price" />
      <label htmlFor="description">Описание</label>
      <Field name="description"  as="textarea" type="description" placeholder="Jane"/>
      <ErrorMessage name="description" />
      <button type="submit">Submit</button>
    </Form>
    </Formik>
  );
};

export default AddItem