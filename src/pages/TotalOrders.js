import React from 'react'
import CartProductCard from '../components/CartProductCard'
import './TotalOrders.css'

function TotalOrders() {
    return (
        <div className="totalorders__page">
        <p>Ordered Products</p>
        <CartProductCard/>
        </div>
    )
}

export default TotalOrders
