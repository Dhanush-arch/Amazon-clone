import React from 'react'
import './CartProductCard.css'
import {websiteBaseUrl} from '../constants';
import {BiPlus, BiMinus} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';
import {addToCart, decreaseFromCart, deleteFromCart} from '../apiWrapper';
import {useSelector, useDispatch} from 'react-redux'
import getCart from '../actions/getCart';
import getCartProducts from '../actions/getCartProducts';

function CartProductCard({title, image, quantity, price, productId, productsId, displayBtn}) {

    const getCartDetail = useDispatch();
    const userCred = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)

    const incrementHandler = () => {
        addToCart(userCred.userID, productId).then(() => {
            if (userCred.isLoggedIn){
                getCartDetail(getCart(userCred.userID)).then(() => {
                    if(cart.products){
                        let products = cart.products
                        products.join(',')
                        if(products.length > 0){
                            getCartDetail(getCartProducts(products)).then(()=>{
                                console.log("gotted");
                            })
                        }
                    }
                })
            }
        })
    }

    const decrementHandler = () => {
        decreaseFromCart(userCred.userID, productsId, cart.cartId).then(() => {
            if (userCred.isLoggedIn){
                getCartDetail(getCart(userCred.userID)).then(() => {
                    if(cart.products){
                        let products = cart.products
                        products.join(',')
                        if(products.length > 0){
                            getCartDetail(getCartProducts(products)).then(()=>{
                                console.log("gotted");
                            })
                        }
                    }
                })
            }
        })
    }

    const deleteHandler = () => {
        deleteFromCart(userCred.userID, productId, cart.cartId).then(() => {
            if (userCred.isLoggedIn){
                getCartDetail(getCart(userCred.userID)).then(() => {
                    if(cart.products){
                        let products = cart.products
                        products.join(',')
                        if(products.length > 0){
                            getCartDetail(getCartProducts(products)).then(()=>{
                                console.log("gotted");
                            })
                        }
                    }
                })
            }
        })
    }

    return (
        <div className="cart__productcard">
        <img src={`${websiteBaseUrl}${image}`} alt="image" />
        <div className="cart__productcard__content">
            <p className="cart__productcard__title">{title}</p>
            {displayBtn ? (<>
            <div className="increment">
                <button className="increment__btn" onClick={incrementHandler} ><BiPlus/></button><p className="increment__num">{quantity}</p><button className="increment__btn" onClick={decrementHandler}><BiMinus/></button>
            </div>
            <a className="delete__btn" onClick={deleteHandler}><MdDelete/></a>
            </>
        ) : ""}

        </div>
        <div className="cart__productcard__center">
        </div>
        <div className="cart__productcard__right">
        <p>{quantity} x {price} = {quantity * parseFloat(price)}</p>
        </div>
        </div>
    )
}

export default CartProductCard
