import React, { useEffect, useState } from 'react'
import Modal from './UI/Modal'
import Cart from './Cart'
import styles from './Header.module.css'
import Container from './UI/Container'
import { BsCartFill } from 'react-icons/bs'
import { useCart } from '../context/CartProvider'

function Header() {
    const [isModelOpen, setIsModalOpen] = useState(false);
    const { cart } = useCart();
    const CartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
    useEffect(() => {
        if (isModelOpen) {
            document.documentElement.style.overflowY = 'hidden';
        }
        else {
            document.documentElement.style.overflowY = 'scroll';
        }

    }, [isModelOpen]);
    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <h1 className='logo'>Online store</h1>
                    <button onClick={() => { setIsModalOpen(true) }} className={styles.showCartBtn}>
                        <span className={styles.cartIconAndNumber}>
                            <BsCartFill />
                            {CartQuantity > 0 && (<span className={styles.number}>{CartQuantity}</span>)}
                        </span>
                        <span>Cart</span>
                    </button>
                </nav>
            </Container>
            {
                isModelOpen && <Modal closeModal={closeModal}><Cart /></Modal>
            }
        </header>
    )
}

export default Header