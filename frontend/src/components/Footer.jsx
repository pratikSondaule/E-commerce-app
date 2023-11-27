import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <img src={footer_logo} alt='Footer logo' />
                    <p>SHOOPER</p>
                </div>
                <ul className='footer-links'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='social-icons'>
                    <div className='icons-container'>
                        <img src={instagram_icon} alt='Instagram icon' />
                    </div>
                    <div className='icons-container'>
                        <img src={pinterest_icon} alt='Pinterest icon' />
                    </div>
                    <div className='icons-container'>
                        <img src={whatsapp_icon} alt='WhatsApp icon' />
                    </div>
                </div>
                <div className='copyright'>
                    <hr />
                    <p>Copyright @ 2023 - All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
