import React from 'react'
import './AddCard.css'

function AddCard({title, image}) {
    const images = image.map((i)=> {
        return <img className="add__img" src={`${i}`} alt=""/>
    })
    return (
        <div className="add__card">
            <p className="add__title">{title}</p>
            <div className="add__imgGrp">
                {images}
            {/* <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/>
            <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/>
            <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/>
            <img className="add__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""/> */}
            </div>
            <a className="add__seeMore">See more</a>
        </div>
    )
}

export default AddCard
