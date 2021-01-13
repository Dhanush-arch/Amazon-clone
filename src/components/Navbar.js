import React, {useEffect, useState} from 'react';
import './Navbar.css';
import { GoSearch } from "react-icons/go";
import {CgShoppingCart} from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom';
import getCart from '../actions/getCart';
import {getSearchProducts, toggleOffSearch, setWord} from '../actions/getSearchProducts';
import {logout} from '../actions/getUserCred';
import eraseCart from '../actions/eraseCart';

function Navbar () {

    const getCartDetail = useDispatch();
    const get_search_products = useDispatch();
    const LOGOUT = useDispatch();
    const EraseCart = useDispatch();
    const userCred = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const searchProb = useSelector(state => state.search)
    const history = useHistory();

    const mqltab = window.matchMedia('(max-width: 992px)').matches;
    const mqlmobile = window.matchMedia('(max-width: 767px)').matches;
    console.log(mqltab)

    useEffect(() => {
        if(userCred.isLoggedIn)
            getCartDetail(getCart(userCred.userID))
    }, [])

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
      if (!event.target.matches('#dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    const seachHandler = () => {
        history.push('/')
        get_search_products(getSearchProducts(searchProb.word)).then(()=>{
            console.log("searched")
        })
    }


    return (
        <div className="navbar">
            <a className="openbtn" onClick={()=>{
                    if(mqlmobile) {
                        document.getElementById("mySidepanel").style.width = "14rem";
                    }
                    else if(mqltab){
                        document.getElementById("mySidepanel").style.width = "18rem";
                    }else {
                        document.getElementById("mySidepanel").style.width = "25rem";
                    }
              }}>
              <FaBars  />
            </a>
            <img onClick={()=> {
                    if(searchProb.onSearch){
                        get_search_products(toggleOffSearch())
                    }
                    else {
                        history.push('/')
                    }
                }} src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="logo"/>
            <div className="search__bar">
                <input type="text" value={searchProb.word} onChange={e => get_search_products(setWord(e.target.value))} id=""/>
                <div className="search__icon" onClick={seachHandler}>
                <GoSearch className="gosearch__icon"/>
                </div>
            </div>
            <div className="navbar__right">
               <div className="navbar__right__in">
                   <div className="navbar__signin mobile-hidden">
                        <p>Hello {userCred.isLoggedIn ? '' : <>Guest</>}</p>
                        {userCred.isLoggedIn ? <a>{mqltab ? <p>{userCred.userEmail.slice(0, 6)}...</p> : userCred.userEmail}</a> : <Link className="navbar__login" to='/login'>Sign In</Link>}
                    </div>
                    {userCred.isLoggedIn ?
                        <div className="dropdown mobile-hidden">
                            <p className="navbar__login" id="dropbtn" onClick={myFunction}>My Account</p>
                            <div id="myDropdown" className="dropdown-content">
                                <Link className="dropdown__link" to='/total-orders'>Orders</Link>
                                <Link className="dropdown__link" onClick={() => {
                                        LOGOUT(logout()).then(()=>{
                                            EraseCart(eraseCart())
                                            history.push("/")
                                        })
                                    }}>Logout</Link>
                             </div>
                        </div>
                    : <Link className="navbar__login mobile-hidden" to='/register'>Sign Up</Link> }
                    <div className="navbar__cart">
                        <span className="cart__items">{cart.products ? cart.products.length : 0}</span>
                        {userCred.isLoggedIn ? <Link style={{cursor:"pointer"}} to='/cart'><CgShoppingCart className="cart__icon"/></Link> : <CgShoppingCart style={{cursor:"pointer"}} onClick={()=>{
                            history.push('/login')
                        }} className="cart__icon"/>}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
