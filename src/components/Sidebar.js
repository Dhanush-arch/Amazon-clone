import React from 'react';
import './Sidebar.css';
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom';
import {logout} from '../actions/getUserCred';
import eraseCart from '../actions/eraseCart';
import {toggleOffSearch} from '../actions/getSearchProducts';
function Sidebar () {
	const userCred = useSelector(state => state.user)
	const searchProb = useSelector(state => state.search)
	const get_search_products = useDispatch();
	const LOGOUT = useDispatch();
	const EraseCart = useDispatch();
	const history = useHistory();
	const mqlmobile = window.matchMedia('(max-width: 767px)').matches;

	const closeSidePanel = () => {
		document.getElementById("mySidepanel").style.width = "0";
	}

	let arr = []
	if(mqlmobile){
		arr.push(<>
			<a className="sidebar__content" onClick={closeSidePanel} onClick={()=> {
					if(searchProb.onSearch){
						get_search_products(toggleOffSearch())
					}
					else {
						history.push('/')
					}
					document.getElementById("mySidepanel").style.width = "0";
				}}><Link to="/" id="sidebar__hidden">Home</Link></a>
			{userCred.isLoggedIn ? <>
				<a className="sidebar__content" onClick={closeSidePanel}><Link to="/cart" id="sidebar__hidden">Cart</Link></a>
				<a className="sidebar__content" onClick={closeSidePanel}><Link to="/total-orders" id="sidebar__hidden">Orders</Link></a>
					<a className="sidebar__content" onClick={closeSidePanel}><Link onClick={() => {
							LOGOUT(logout()).then(()=>{
								EraseCart(eraseCart())
								history.push("/")
							})
						}} id="sidebar__hidden">Logout</Link></a>
					</> : <a className="sidebar__content" onClick={closeSidePanel}><Link to='/register'id="sidebar__hidden">Sign Up</Link></a>}
			</>)
	}

	return (
		<div id="mySidepanel" className="sidepanel">
			<div className="sidebar__header">
			<p>Hello {userCred.isLoggedIn ? <a>{userCred.userEmail}</a> : <Link to="/login" onClick={closeSidePanel}>Sign In</Link>}</p>
			<a href="javascript:void(0)" className="closebtn" onClick={()=> {
			document.getElementById("mySidepanel").style.width = "0";
		  }}>×</a>
			</div>
			{arr}
		  	<a className="sidebar__title">Trending</a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/best-sellers">Best Sellers</Link></a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/new-releases">New Releases</Link></a>
			  <hr/>
		  	<a className="sidebar__title">Digital Content And Devices</a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/echo-&-alexa">Echo & Alexa</Link></a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/fire-TV-stick">Fire TV Stick</Link></a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/kindle-ebooks">Kindle E-Readers & eBooks</Link></a>
			  <hr/>
		  	<a className="sidebar__title">Shop By Department</a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/mobile_computers">Mobile, Computers</Link></a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/TV_appliances_electronics">TV, Appliances, Electronics</Link></a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/men-fashion">Men's Fashion</Link></a>
			  <a className="sidebar__content" onClick={closeSidePanel}><Link to="/products/women-fashion">Women's Fashion</Link></a>
			  <hr/>
		  	<a className="sidebar__title">Help & Settings</a>
			  <a className="sidebar__content">Your Account</a>
			  <a className="sidebar__content">Customer Service</a>
			  <a className="sidebar__content">{userCred.isLoggedIn ? "": <Link to="/login">Sign In</Link>}</a>
		  	<br/>
		  	<br/>

		</div>
	)
}

export default Sidebar
