import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item'

const ShopCategory = (props) => {
    const { allProduct } = useContext(ShopContext)
    return (
        <>
            <div className='shop-category'>
                <img className='shopcategory-banner' src={props.banner} />
                <div className='shopcategory-indexShort'>
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                    <div className='shopcategory-sort'>
                        Sort by <img src={dropdown_icon} alt='Dropdown icon' />
                    </div>
                </div>
                <div className='shopcategory-products'>
                    {allProduct.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        }
                    })}
                </div>
                <div className='loadmore'>
                    Explore More
                </div>
            </div>
        </>
    )
}

export default ShopCategory
