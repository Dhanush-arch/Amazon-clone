import React, {useState} from 'react'
import './ProductCard.css'
import {websiteBaseUrl} from '../constants';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';
import { addToCart as ADD_TO_CART } from "../apiWrapper";
import getCart from '../actions/getCart';

function ProductCard({id, title, desc, price, image}) {
    const getCartDetail = useDispatch();
    const userCred = useSelector(state => state.user)
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const addToCartHandler = (productId, userId) => {
        ADD_TO_CART(userId, productId).then(()=>{
            console.log("user iD>>>");
            console.log(userCred.userID)
            getCartDetail(getCart(userCred.userID))
        })
    }
    return (
        <div className="product__card">
            <p className="product__title">{title}</p>
            <img className="product__img" src={`${websiteBaseUrl}${image}`} alt=""/>
            <div className="product__details">
                <p className="product__price">Rs.{price}</p>
                <button  onClick={userCred.isLoggedIn ? () => {
                        addToCartHandler(id, userCred.userID)
                    } : onOpenModal} className="product__addToCart" >Add To Cart</button>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="product__modal">
                    <h2 className="product__modal__title">Login to Add to Cart</h2>
                    <Link className="product__addtocart__login" to='/login'>Login</Link>
                </div>
            </Modal>
        </div>
    )
}

export default ProductCard
