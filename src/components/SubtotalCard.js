import React from 'react'
import './SubtotalCard.css'

function SubtotalCard() {
    return (
      <div className="subtotal__card">
        <div className="sub__totalPrice">
          <p className="sub__subTotal">Subtotal (2 items): </p><p className="cart__subPrice">98,989.00</p>
        </div>
        <button className="subtotal__btn">Proceed to Buy</button>
      </div>
    )
}

export default SubtotalCard
