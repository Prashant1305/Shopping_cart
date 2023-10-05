import React from 'react'
import styles from "./CartItem.module.css";
import { useCart } from '../context/CartProvider'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function CartItem({ id, quantity, price, img, title }) {
    const { cart, dispatch } = useCart();
    return (
        <div className={styles.cartItem}>
            {/* left */}
            <div className={styles.imgAndTitle}>
                <div className={styles.imgContainer}><img src={img} alt={title} className={styles.cartImage} /></div>
                <h3>{title}</h3>
            </div>
            {/* right */}
            <div className={styles.otherControls}>
                <div className={styles.qtyInput}>
                    <button onClick={() => { dispatch({ type: 'Increase', id: id }) }}><AiOutlinePlus /></button>
                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button onClick={() => { dispatch({ type: 'Decrease', id: id }) }}><AiOutlineMinus /></button>
                </div>
                <p>&#8377; {price * quantity}</p>
                <button className={styles.removeItemBtn} onClick={() => { dispatch({ type: 'Remove', id: id }) }}><ImCross /></button>
            </div>
        </div>
    )
}

export default CartItem