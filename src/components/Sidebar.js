import React from 'react';
import './Sidebar.css';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';

function Sidebar () {
	const userCred = useSelector(state => state.user)

	const closeSidePanel = () => {
		document.getElementById("mySidepanel").style.width = "0";
	}

	return (
		<div id="mySidepanel" className="sidepanel">
			<div className="sidebar__header">
			<p>Hello {userCred.isLoggedIn ? <a>{userCred.userEmail}</a> : <>Sign In</>}</p>
			<a href="javascript:void(0)" className="closebtn" onClick={()=> {
			document.getElementById("mySidepanel").style.width = "0";
		  }}>×</a>
			</div>
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
			  <a className="sidebar__content">{userCred.isLoggedIn ? "": <>Sign In</>}</a>
		  	<br/>
		  	<br/>

		</div>
	)
}

export default Sidebar
