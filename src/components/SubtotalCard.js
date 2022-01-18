import React from 'react'
import './SubtotalCard.css'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';

function SubtotalCard() {

    const userCred = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const history = useHistory();
    return (
      <div className="subtotal__card">
        <div className="sub__totalPrice">
          <p className="sub__subTotal">Subtotal ({cart.products.length} items): </p><p className="cart__subPrice">Rs.{cart.price}</p>
        </div>
        <button className="subtotal__btn" onClick={() => {
                history.push('/delivery')
            }}>Proceed to Buy</button>
      </div>
    )
}

export default SubtotalCard
