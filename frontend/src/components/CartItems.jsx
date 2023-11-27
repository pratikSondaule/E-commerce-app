import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const { allProduct, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <>
            <div className='cartitems'>
                <div className='format-main'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {allProduct.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div key={item.id}>
                                <div className='format format-main'>
                                    <img src={item.image} alt='Product image' className='carticon-product-icon' />
                                    <p>{item.name}</p>
                                    <p>${item.new_price}</p>
                                    <button className='quantity'>{cartItems[item.id]}</button>
                                    <p>${item.new_price * cartItems[item.id]}</p>
                                    <img className='remove-icon' src={remove_icon} alt='Remove icon' onClick={() => { removeFromCart(item.id) }} />
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    return null
                })}
                <div className='cartitems-down'>
                    <div className='cart-total'>
                        <h1>Cart Total</h1>
                        <div>
                            <div className='total-item'>
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className='total-item'>
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <div className='total-item'>
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                    <div className='promo-code'>
                        <p>If you have a promo code, Enter it here</p>
                        <div className='promo-box'>
                            <input type='text' placeholder='Promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems
