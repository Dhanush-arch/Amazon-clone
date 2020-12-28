import React from 'react';
import './Navbar.css';
import { GoSearch } from "react-icons/go";
import {CgShoppingCart} from 'react-icons/cg';

function Navbar () {
    return (
        <div className="navbar">
            <button className="openbtn" onClick={()=> {
                document.getElementById("mySidepanel").style.width = "380px";
            }}>☰</button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo"/>
            <div className="search__bar">
                <input type="text" placeholder="search" id=""/>
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
