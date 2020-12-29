import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './MainCarousel.css';

function MainCarousel() {
    return (
        <Carousel className="carousel__main" infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} autoPlay={true}
        >
        <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/Dec_Desktop_Seasonal_1x._CB414543468_.jpg" />
        </div>
        <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg" />
        </div>
        <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Jewellery/GW/unrec2/PC-BUnk-1500-600._CB415511219_.jpg" />
        </div>
    </Carousel>
    )
}

export default MainCarousel
