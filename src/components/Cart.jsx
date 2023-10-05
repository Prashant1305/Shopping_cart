import React from 'react'
import { useCart } from '../context/CartProvider'
import CartItem from './CartItem';
import styles from "./Cart.module.css";

function Cart() {
    const { cart, dispatch } = useCart();
    if (cart.length === 0) {
        return <h1>Cart Empty!</h1>;
    }
    function total() {
        let amt = 0;
        for (let i of cart) {
            amt += i.quantity * i.price;
        }
        return amt;
    }
    return (
        <div className={styles.cart}>
            <h2 className={styles.cartHeading}>Shopping Cart</h2>
            <div>
                {cart.map((item) => <CartItem {...item} key={item.id} />)}
            </div>
            <h1>Total Amount - {' '} &#8377; {total()}</h1>
        </div>

    )
}

export default Cart