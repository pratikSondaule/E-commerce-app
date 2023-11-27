import React, { createContext, useState } from 'react'
import allProduct from '../assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < allProduct.length + 1; i++) {
        cart[i] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        setCartItems((prevVal) => ({ ...prevVal, [itemId]: prevVal[itemId] + 1 }))
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prevVal) => ({ ...prevVal, [itemId]: prevVal[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = { allProduct, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItem }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
