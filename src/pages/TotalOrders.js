import React, {useEffect} from 'react'
import CartProductCard from '../components/CartProductCard'
import './TotalOrders.css'
import {useSelector, useDispatch} from 'react-redux'
import getOrderedProducts from '../actions/getOrderedProducts';
import {websiteBaseUrl} from '../constants';

function TotalOrders() {
    const get_ordered_products = useDispatch();
    const userCred = useSelector(state => state.user)
    const orderedProducts = useSelector(state => state.ordered_products.products)

    useEffect(() => {
        if (userCred.isLoggedIn){
            get_ordered_products(getOrderedProducts(userCred.userID)).then(() => {
                console.log("ordered products >>>")
            })
        }
    },[])

    let list = []
    if(orderedProducts.length > 0) {
        orderedProducts.map((product) => {

            let temp_list =[]
            product.products.map((pro) => {
                temp_list.push(
                        <div className="total__productcard">
                        <div className="total__image"><img src={`${websiteBaseUrl}${pro.productImage}`} alt="image" /></div>
                        <div className="total__productcard__center">
                        <p className="total__productcard__title">{pro.productName}</p>
                        </div>
                        <div className="total__productcard__right">
                        <p>{pro.quantity} x {pro.productPrice} = {pro.quantity * parseFloat(pro.productPrice)}</p>
                        </div>
                        </div>
                )
            })




            list.push(<>
                <div  className="total__card">
                    <p className="total__card__id">Order ID: {product.cartId}<p className="total__card__content">Price</p></p>
                    {temp_list}
                    <hr/>
                    <p className="total__card__content">Payment Mode: {product.paymentMethod}</p>
                    <p className="total__card__content">Price: {product.price}</p>

                </div>
                </>)
        })
    } else {
        list.push(
        <div className="no__orders__card">
              <p className="no__orders__card__title">You have not Ordered Any Products.</p>
        </div>)
    }

    return (
        <div className="totalorders__page">
        <p>Ordered Products</p>
        {list}
        </div>
    )
}

export default TotalOrders
