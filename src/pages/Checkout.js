import React, {useEffect, useState} from 'react'
import './Checkout.css'
import CartProductCard from '../components/CartProductCard'
import {useSelector, useDispatch} from 'react-redux'
import getCart from '../actions/getCart';
import getCartProducts from '../actions/getCartProducts';
import { getPaymentDetail, checkPaymentStatus } from "../apiWrapper";
import {useHistory} from 'react-router-dom';

function Checkout() {
    const [res, setRes] = useState("");
    const delivery = useSelector(state => state.delivery_details);
    const get_cart = useDispatch();
    const userCred = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const cart_products = useSelector(state => state.cart_products.products)
    const history = useHistory();

    useEffect(() => {
        if (userCred.isLoggedIn){
            get_cart(getCart(userCred.userID)).then(() => {
                let products = cart.products
                products.join(',')
                get_cart(getCartProducts(products)).then(()=>{
                    console.log("gotted");
                })
            })
        }

    },[])

    useEffect(() => {
        console.log("IN CHECKOUT>>>")
        getPaymentDetail(cart.price).then((e) => {
            setRes(e.data);
            console.log(e.data)
        })
    }, [])

    let product_cards = []
    cart_products.map(product => {
        product_cards.push(<><CartProductCard title={product.productName} image={product.productImage} quantity={product.quantity} price={product.productPrice}/><hr/></>)
    })


    const paymentHandler = async (e) => {
        e.preventDefault();
        let options = {
        "key": "rzp_test_mp6FNCpzegnAZh", // Enter the Key ID generated from the Dashboard
        "amount": `${cart.price}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Amazon",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": `${res.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            checkPaymentStatus(cart.cartId, response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature).then((e) => {
                console.log(e)
                if (userCred.isLoggedIn){
                    get_cart(getCart(userCred.userID)).then(() => {
                        let products = cart.products
                        products.join(',')
                        get_cart(getCartProducts(products)).then(()=>{
                            history.push('/total-orders')
                        })
                    })
                }
            })
        },
        "prefill": {
            "email": `${userCred.userEmail}`,
            "contact": `${delivery.num}`
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        rzp1.on('payment.failed', function (response){
            alert("Payment Failed. Retry");
        })
    };

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
                    <p className="checkout__address__content">Name: {delivery.name},</p>
                     <p className="checkout__address__content">Address: {delivery.add1},</p>
                  <p className="checkout__address__content">{delivery.add2}</p>
                    <p className="checkout__address__content">{delivery.state}, {delivery.city} - {delivery.zip}</p>
                <p className="checkout__address__content">Ph.No:{delivery.num}</p>
              </div>
              <div className="checkout__products">
                <p className="checkout__address__title" >Products:</p>
                <hr/>
                  {product_cards}
              </div>
            </div>
          </div>
          <div className="checkout__right">
            <div className="inner__row">
              <p>Subprice: Rs.{cart.price}</p>
              <p>Payment Method:</p>
              <input className="input__radio" type="radio" id="cod" name="payment" value="1"/>
              <label for="cod">Cash on Delivery</label><br/>
              <input className="input__radio" type="radio" id="online" name="payment" value="2"/>
              <label for="online">Online</label><br/>
              <input className="input__submit" type="submit" value="CheckOut"/>
              <button onClick={paymentHandler}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Checkout
