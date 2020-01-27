import React from 'react';
import styles from './ItemCard.module.css';

const ItemCard = () => {
    return (
        <div className={styles.CardContainer}>

            <div className={styles.CardElement0}>
                <a href='/'>Вернуться</a>
     
            </div>
            <div className={styles.CardElement1}>
                <hr />
            </div>

            <div className={styles.CardElement2}>
                <img alt="ddd" src='https://ecotechnica.com.ua/images/-foto1/939-hyundai-kona-electric-ecotechnica-com-ua-5.jpg' />
            </div>

            <div className={styles.CardElement3}>
                <span>Hyundai Kona Electric</span>
                <p>В комплектации Express с батареей 39.2 кВт*ч покупателю будут доступны система подогрева АКБ, система рекуперации энергии при торможении, 6 подушек безопасности, ABS, ESC, HAC, система предупреждения о выходе из полосы движения, двухзонный климат-контроль, выбор режима вождения Drive Mode Select.</p>
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
                    <div className={styles.OptionName}><span >Год выпуска</span></div>
                    <span className={styles.OptionValue}>2017</span>
                </div>
                <div>
                    <div className={styles.OptionName}><span >Тип топлива</span></div>
                    <span className={styles.OptionValue}>Бензин</span>
                </div>
                <div>
                    <div className={styles.OptionName}><span >Стоимость</span></div>
                    <span className={styles.OptionValuePrice}>17 000$</span>
                </div>

            </div>
            <div className={styles.CardElement5}>
                <button>Беру!</button>
            </div>

        </div>

    )
}

export default ItemCard;

// <div className={styles.Container}>
// {/* 
//                 <div className={styles.Header}>
//                     <a href='/'>Вернуться</a>
//                 </div> */}

//             <div className={styles.CardItem}>
//                 <div className={styles.Block1} >
//                     <div>
//                         <img alt="ddd" src='https://www.meme-arsenal.com/memes/f6b2454302dace7b804b08d0b9e970f6.jpg' />
//                     </div>
//                     <div>
//                         <span>Цвет авто</span>
//                         <select>синийавав</select>
//                     </div>
//                 </div>
//                 <div className={styles.Block2}>
//                     <p> ./src/Comp onents/Items/ ItemCard/ItemCa rd.jsx
//                         Line 12:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

//                         Search for the keywords to learn more about each warning.
//                         To ignore, add // eslint-disable-next-line to the line before.
//                     </p>
//                     <button>Беру!</button>
//                 </div>

//             </div>

//         </div>