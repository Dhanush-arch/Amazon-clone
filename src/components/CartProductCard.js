import React from 'react'
import './CartProductCard.css'
import {websiteBaseUrl} from '../constants';

function CartProductCard({title, image, quantity, price}) {
    return (
        <div className="cart__productcard">
        <img src={`${websiteBaseUrl}${image}`} alt="image" />
        <div className="cart__productcard__center">
        <p className="cart__productcard__title">{title}</p>
        </div>
        <div className="cart__productcard__right">
        <p>{quantity} x {price} = {quantity * parseFloat(price)}</p>
        </div>
        </div>
    )
}

export default CartProductCard
