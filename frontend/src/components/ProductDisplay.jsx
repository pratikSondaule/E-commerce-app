import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    return (
        <>
            <div className='productdisplay'>
                <div className='productdisplay-left'>
                    <div className='img-list'>
                        <img src={product.image} alt='Product image' />
                        <img src={product.image} alt='Product image' />
                        <img src={product.image} alt='Product image' />
                        <img src={product.image} alt='Product image' />
                    </div>
                    <div className='img'>
                        <img className='main-img' src={product.image} alt='Product image' />
                    </div>
                </div>
                <div className='productdisplay-right'>
                    <h1>{product.name}</h1>
                    <div className='stars'>
                        <img src={star_icon} alt='Star icon' />
                        <img src={star_icon} alt='Star icon' />
                        <img src={star_icon} alt='Star icon' />
                        <img src={star_icon} alt='Star icon' />
                        <img src={star_dull_icon} alt='Star icon' />
                        <p>(130)</p>
                    </div>
                    <div className='prices'>
                        <div className='old-price'>${product.old_price}</div>
                        <div className='new-price'>${product.new_price}</div>
                    </div>
                    <div className='description'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className='right-size'>
                        <h1>Select Size</h1>
                        <div className='right-sizes'>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <p className='category'><span>Category : </span>Women, T-Shirts, Crop-Top</p>
                    <p className='category'><span>Tags : </span>Modern, Latest</p>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay
