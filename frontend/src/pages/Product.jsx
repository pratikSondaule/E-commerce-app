import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { allProduct } = useContext(ShopContext);
    const { productId } = useParams()
    const product = allProduct.find((e) => e.id === Number(productId))
    return (
        <>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </>
    )
}

export default Product
