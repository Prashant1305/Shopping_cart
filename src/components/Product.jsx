import React, { useEffect, useRef } from 'react'
import { useCart } from '../context/CartProvider'
import styles from './Product.module.css'

function Product({ id, title, price, img }) {
    const { cart, dispatch } = useCart();

    function handleClick(e) {

        dispatch({ type: 'Add', item: { id, title, price, img, quantity: 1 } });
        // e.target.textContent = 'Add again'
    }

    return (
        <div className={styles.product}>
            <img src={img} alt={title} className={styles.productImage} />
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>&#8377; {price}</p>
            <button className={styles.addToCartBtn} onClick={(e) => {
                handleClick(e)
            }}>Add to cart</button>
        </div>
    )
}

export default Product