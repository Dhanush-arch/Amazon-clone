import React from 'react'
import './CartProductCard.css'

function CartProductCard() {
    return (
        <div className="cart__productcard">
        <img src="https://m.media-amazon.com/images/I/71r4k5EHeZL._AC_AA180_.jpg" alt="" />
        <div className="cart__productcard__center">
        <p className="cart__productcard__title">Prouct Description</p>
        <p>Quantity</p>
        </div>
        <div className="cart__productcard__right">
        <p>Price</p>
        </div>
        </div>
    )
}

export default CartProductCard
