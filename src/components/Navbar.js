import React from 'react';
import './Navbar.css';
import { GoSearch } from "react-icons/go";
import {CgShoppingCart} from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';

function Navbar () {
    return (
        <div className="navbar">
            <a className="openbtn" onClick={()=>{
                document.getElementById("mySidepanel").style.width = "380px";
              }}>
              <FaBars  />
            </a>
            <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="logo"/>
            <div className="search__bar">
                <input type="text" id=""/>
                <div className="search__icon">
                <GoSearch className="gosearch__icon"/>
                </div>
            </div>
            <div className="navbar__right">
               <div className="navbar__right__in">
                   <div className="navbar__signin">
                        <p>Hello Guest</p>
                        <a href="#">Sign In</a>
                    </div>
                    <a href="#" className="navbar__login">Login</a>
                    <div className="navbar__cart">
                        <span className="cart__items">1</span>
                        <CgShoppingCart className="cart__icon"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
