import React, {useEffect} from 'react'
import './Cart.css'
import EmptyCard from '../components/EmptyCard'
import CartProductCard from '../components/CartProductCard'
import SubtotalCard from '../components/SubtotalCard'
import {useSelector, useDispatch} from 'react-redux'
import getCart from '../actions/getCart';
function Cart() {
    const get_cart = useDispatch();
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        get_cart(getCart(1));
    },[])

    return (
        <div className="cart__page">
          <div className="cart__left">
            <p className="cart__bold__para">Pay faster for all your shopping needs with Amazon Pay balance</p>
            <p>Get Instant refund on cancellations | Zero payment failures</p>
            <div className="cart__col">
              <div className="cart__row__1">
                <p className="cart__title">Shopping Cart</p>
                <p className="cart__subprice">Price</p>
              </div>
              <hr />
              <CartProductCard/>
              <hr/>
                <CartProductCard/>
                  <hr/>
                  <CartProductCard/>
                    <hr/>
                    <CartProductCard/>
                      <hr/>
              <CartProductCard/>
                <hr/>
              <div className="cart__totalPrice">
                <p className="cart__subTotal">Subtotal (2 items): </p><p className="cart__subPrice">98,989.00</p>
              </div>
            </div>
          </div>
          <div className="cart__right">
            <br></br>
            <br></br>
            <div className="cart__row">
              <SubtotalCard/>
            </div>
          </div>
        </div>
    )
}

export default Cart
