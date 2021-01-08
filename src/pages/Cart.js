import React, {useEffect} from 'react'
import './Cart.css'
import EmptyCard from '../components/EmptyCard'
import CartProductCard from '../components/CartProductCard'
import SubtotalCard from '../components/SubtotalCard'
import {useSelector, useDispatch} from 'react-redux'
import getCart from '../actions/getCart';
import getCartProducts from '../actions/getCartProducts';

function Cart() {
    const get_cart = useDispatch();
    const userCred = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const cart_products = useSelector(state => state.cart_products.products)

    useEffect(() => {
        if (userCred.isLoggedIn){
            get_cart(getCart(userCred.userID)).then(() => {
                let products = cart.products
                products.join(',')
                if(products.length > 0){
                    get_cart(getCartProducts(products)).then(()=>{
                        console.log("gotted");
                    })
                }
            })
        }

    },[])

    let product_cards = []
    cart_products.map(product => {
        product_cards.push(<><CartProductCard title={product.productName} image={product.productImage} quantity={product.quantity} price={product.productPrice}/><hr/></>)
    })

    return (
        <div className="cart__page">
          <div className="cart__left">
            <p className="cart__bold__para">Pay faster for all your shopping needs with Amazon Pay balance</p>
            <p>Get Instant refund on cancellations | Zero payment failures</p>
            <div className="cart__col">
              <div className="cart__row__1">
                <p className="cart__title">Shopping Cart</p>
                {userCred.isLoggedIn && (product_cards.length > 0) ? <p className="cart__subprice">Price</p> : ''}
              </div>
              {userCred.isLoggedIn && (product_cards.length > 0) ? <>
                  <hr/>
                  {product_cards}
                  <div className="cart__totalPrice">
                    <p className="cart__subTotal">Subtotal ({cart.products.length} items): </p><p className="cart__subPrice"> Rs.{cart.price}</p>
                  </div>
            </> : <EmptyCard/>}


            </div>
          </div>
          <div className="cart__right">
            <br></br>
            <br></br>
            <div className="cart__row">
                {userCred.isLoggedIn && (product_cards.length > 0) ? <SubtotalCard/> : ''}
            </div>
          </div>
        </div>
    )
}

export default Cart
