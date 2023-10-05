import React, { createContext, useContext, useReducer } from 'react'
import { toast } from 'react-toastify';

function reducer(cart, action) {
    switch (action.type) {
        case 'Add':
            // console.log('Add');
            const temp = [...cart];
            const flag = temp.find((item) => item.id === action.item.id);
            if (flag != undefined) {
                flag.quantity += 1;
                toast.info(`${flag.quantity} ${flag.title} in your cart`);
            }
            else { // when item not in cart 
                toast.info(`${action.item.title} added`);
                return [...cart, action.item];
            }
            return temp;

        case 'Increase':
            // console.log('Increase');
            const itemp = [...cart];
            itemp.forEach((item) => {
                if (action.id === item.id) {
                    item.quantity += 1;
                }
            });
            return itemp;

        case 'Decrease':
            // console.log('Decrease');
            const dtemp = [];
            for (let item of cart) {
                if (action.id === item.id) {
                    if (item.quantity === 1) {
                        // console.log('removed');
                        continue;
                    }
                    item.quantity -= 1;
                }
                dtemp.push(item);
            }
            return dtemp;

        case 'Remove':
            // console.log('Remove');
            toast.info('Item Removed');
            return cart.filter((item) => item.id !== action.id);
    }
    return cart;
}
const CartContext = createContext();
function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>
    )
}
export function useCart() {
    return useContext(CartContext);
}

export default CartProvider;
