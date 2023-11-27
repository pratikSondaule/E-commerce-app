import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    const { getTotalCartItem } = useContext(ShopContext)
    return (
        <>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={logo} alt='Logo' />
                    <p>SHOPPER</p>
                </div>
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu('shop') }}><Link to={'/'} style={{ textDecoration: 'none' }}>Shop{menu === 'shop' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => { setMenu('men') }}><Link to={'/mens'} style={{ textDecoration: 'none' }}>Men{menu === 'men' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => { setMenu('women') }}><Link to={'/womens'} style={{ textDecoration: 'none' }}>Women{menu === 'women' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => { setMenu('kids') }}><Link to={'/kids'} style={{ textDecoration: 'none' }}>Kids{menu === 'kids' ? <hr /> : <></>}</Link></li>
                </ul>
                <div className='cart'>
                    <Link to={'/login'}><button>Login</button></Link>
                    <Link to={'/cart'}><img src={cart_icon} alt='Cart' /></Link>
                    <div className='cart-count'>{getTotalCartItem()}</div>
                </div>
            </div>
        </>
    )
}

export default Navbar
