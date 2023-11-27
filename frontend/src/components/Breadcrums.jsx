import React from 'react'
import breadcrum_arrow from '../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const { product } = props
    return (
        <>
            <div className='breadcrum'>
                HOME <img src={breadcrum_arrow} alt='Breadcrum arrow' /> SHOP <img src={breadcrum_arrow} alt='Breadcrum arrow' /> {product.category} <img src={breadcrum_arrow} alt='Breadcrum arrow' /> {product.name}
            </div>
        </>
    )
}

export default Breadcrums
