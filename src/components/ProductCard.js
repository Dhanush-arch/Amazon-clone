import React from 'react'
import './ProductCard.css'

function ProductCard() {
    return (
        <div className="product__card">
            <p className="product__title">Title</p>
            <img className="product__img" src="https://m.media-amazon.com/images/I/41kZhC-EkeL.__AC_SY200_.jpg" alt=""/>
            <p className="product__price">Rs.10,000</p>
            <button className="product__addToCart" >Add To Cart</button>
        </div>
    )
}

export default ProductCard
