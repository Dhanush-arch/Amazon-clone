import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer__main">
          <div className="footer__top">
            <p onClick={()=> {
                 window.scrollTo({top: 0, behavior: 'smooth'});
              }}>Back to top</p>
          </div>
          <div className="footer__center__1">
            <div className="footer__contents">
              <p className="footer__heading">Get to Know Us</p>
              <p className="footer__para">About Us</p>
              <p className="footer__para">Careers</p>
              <p className="footer__para">Press Releases</p>
              <p className="footer__para">Amazon Cares</p>
              <p className="footer__para">Gift A Smile</p>
            </div>

            <div className="footer__contents">
              <p className="footer__heading">Connect with Us</p>
              <p className="footer__para">Facebook</p>
              <p className="footer__para">Twitter</p>
              <p className="footer__para">Instagram</p>
            </div>
            <div className="footer__contents">
              <p className="footer__heading">Make Money with Us</p>
              <p className="footer__para">Sell on Amazon</p>
              <p className="footer__para">Sell under Amazon Accelerator</p>
              <p className="footer__para">Become an Affiliate</p>
              <p className="footer__para">Fulfilment by Amazon</p>
              <p className="footer__para">Advertise Your Products</p>
              <p className="footer__para">Amazon Pay on Merchants</p>
            </div>
            <div className="footer__contents">
              <p className="footer__heading">Let Us Help You</p>
              <p className="footer__para">COVID-19 and Amazon</p>
              <p className="footer__para">Your Account</p>
              <p className="footer__para">Returns Centre</p>
              <p className="footer__para">100% Purchase Protection</p>
              <p className="footer__para">Amazon App Download</p>
              <p className="footer__para">Amazon Assistant Download</p>
              <p className="footer__para">Help</p>
            </div>
          </div>
          <div className="footer__bottom"></div>
        </div>
    )
}

export default Footer
