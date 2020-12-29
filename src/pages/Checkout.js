import React from 'react'
import './Checkout.css'
import CartProductCard from '../components/CartProductCard'

function Checkout() {
    return (
      <div className="checkout__page">
        <div className="left__title">
          <p>Order Summary</p>
        </div>
        <div className="checkout__page__main">
          <div className="checkout__left">
            <div className="inner__col">
              <div className="checkout__address">
                <p className="checkout__address__title">Delivery Address:</p>
                  <p className="checkout__address__content">No:12, React Street,</p>
                    <p className="checkout__address__content">LA - 1033</p>
                <p className="checkout__address__content">Ph.No:1234567890</p>
              </div>
              <div className="checkout__products">
                <p className="checkout__address__title" >Products:</p>
                  <CartProductCard/>
                    <CartProductCard/>
                      <CartProductCard/>
                        <CartProductCard/>
                <CartProductCard/>
              </div>
            </div>
          </div>
          <div className="checkout__right">
            <div className="inner__row">
              <p>Subprice: 12345</p>
              <p>Payment Method:</p>
              <input className="input__radio" type="radio" id="cod" name="payment" value="1"/>
              <label for="cod">Cash on Delivery</label><br/>
              <input className="input__radio" type="radio" id="online" name="payment" value="2"/>
              <label for="online">Online</label><br/>
              <input className="input__submit" type="submit" value="CheckOut"/>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Checkout
