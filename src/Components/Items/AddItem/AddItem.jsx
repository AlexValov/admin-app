import React from 'react';
import styles from './AddItem.module.css';
import FileUpload from './FileUpload'
import { addCarAction } from '../../../redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AddItem = () => {
    const dispatch = useDispatch()
return (
    <div className={styles.AddItem}>
        <div className={styles.ElementButtons}>
            <button className={styles.ReturnButton}><NavLink to='/item-list'>Вернуться</NavLink></button>
            {/* <button className={styles.SaveButton}>Сохранить</button> */}
        </div>
        <div className={styles.AddItemElement2}>
            <div>
            <Formik
        initialValues= {{id: null, name: '', price: '', image: null, description: '' }}
        validationSchema={Yup.object({
            name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            price: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            image: Yup.mixed()
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

    <Form className={styles.AddItemForm}>
      <label htmlFor="name">Название</label>
      <Field name="name" type="text" placeholder="Mercedes S550 4matic"/>
      <ErrorMessage name="firstName" />
      <label htmlFor="price">Цена</label>
      <Field name="price" type="number" placeholder="113 000"/>
      <ErrorMessage name="price" />
      <label htmlFor="image">Изображение</label>
      <Field name="image"  component={FileUpload}/>
      <label htmlFor="description">Описание</label>
      <Field name="description"  as="textarea" type="description" placeholder="Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" />
      <ErrorMessage name="description" />
      <button type="submit" className={styles.SaveButton} >Сохранить</button>
    </Form>
    </Formik>
            </div>
        </div>
    </div>
)
}

export default AddItem;
