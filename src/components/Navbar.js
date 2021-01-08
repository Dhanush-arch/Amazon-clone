import React, {useEffect} from 'react';
import './Navbar.css';
import { GoSearch } from "react-icons/go";
import {CgShoppingCart} from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom';
import getCart from '../actions/getCart';

function Navbar () {
    const getCartDetail = useDispatch();
    const userCred = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const history = useHistory();

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

    return (
        <div className="navbar">
            <a className="openbtn" onClick={()=>{
                document.getElementById("mySidepanel").style.width = "380px";
              }}>
              <FaBars  />
            </a>
            <img onClick={()=> {
                    history.push('/')
                }} src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="logo"/>
            <div className="search__bar">
                <input type="text" id=""/>
                <div className="search__icon">
                <GoSearch className="gosearch__icon"/>
                </div>
            </div>
            <div className="navbar__right">
               <div className="navbar__right__in">
                   <div className="navbar__signin">
                        <p>Hello {userCred.isLoggedIn ? '' : <>Guest</>}</p>
                        {userCred.isLoggedIn ? <a>{userCred.userEmail}</a> : <a href="#">Sign In</a>}
                    </div>
                    {userCred.isLoggedIn ?
                        <div className="dropdown">
                            <p className="navbar__login" id="dropbtn" onClick={myFunction}>My Account</p>
                            <div id="myDropdown" className="dropdown-content">
                                <Link className="dropdown__link" to='/total-orders'>Orders</Link>
                                <Link className="dropdown__link" to=''>Logout</Link>
                             </div>
                        </div>
                    : <Link className="navbar__login" to='/login'>Login</Link> }
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
