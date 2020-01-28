import React from 'react';
import styles from './AddItem.module.css';

const AddItem = () => {
    return (
        <div className={styles.AddItem}>
            <div className={styles.ElementButtons}>
                <button className={styles.ReturnButton}>Вернуться</button>
                <button className={styles.SaveButton}>Сохранить</button>
            </div>
            <div className={styles.AddItemElement2}>
                <div>
            <form className={styles.AddItemForm}>
                <span>Добавление товара</span>

                <label htmlFor="itemname">Название товара</label>
                <input type="text" placeholder="Mercedes S550 4matic" name="itemname" required />

                <label htmlFor="itemprice">Стоимость товара</label>
                <input type="text" placeholder="113 000" name="itemprice" required />

                <label htmlFor="itemimage">Изображение</label>
                <input type="text" placeholder="image" name="itemimage" required />

                <label htmlFor="psw">Описание</label>
                <textarea type="password" placeholder="Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" name="psw" required />
            </form>
                    
            </div>
            </div>
            

        </div>
    )
}

export default AddItem;
