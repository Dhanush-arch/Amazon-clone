import React from 'react'
import './AddCard.css'

function AddCard() {
    const images = [];
    return (
        <div className="add__card">
            <p className="add__title">Title</p>
            <div className="add__imgGrp">
            <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/>
            <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/>
            <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/>
            <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/>
            </div>
            <a className="add__seeMore">See more</a>
        </div>
    )
}

export default AddCard
