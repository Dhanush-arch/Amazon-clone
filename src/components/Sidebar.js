import React from 'react';
import './Sidebar.css';
import {useSelector, useDispatch} from 'react-redux'

function Sidebar () {
	const userCred = useSelector(state => state.user)

	return (
		<div id="mySidepanel" className="sidepanel">
			<div className="sidebar__header">
			<p>Hello {userCred.isLoggedIn ? <a>{userCred.userEmail}</a> : <>Sign In</>}</p>
			<a href="javascript:void(0)" className="closebtn" onClick={()=> {
			document.getElementById("mySidepanel").style.width = "0";
		  }}>×</a>
			</div>
		  	<a className="sidebar__title">Trending</a>
			  <a className="sidebar__content">Best Sellers</a>
			  <a className="sidebar__content">New Releases</a>
			  <hr/>
		  	<a className="sidebar__title">Digital Content And Devices</a>
			  <a className="sidebar__content">Echo & Alexa</a>
			  <a className="sidebar__content">Fire TV Stick</a>
			  <a className="sidebar__content">Kindle E-Readers & eBooks</a>
			  <hr/>
		  	<a className="sidebar__title">Shop By Department</a>
			  <a className="sidebar__content">Mobile, Computers</a>
			  <a className="sidebar__content">TV, Appliances, Electronics</a>
			  <a className="sidebar__content">Men's Fashion</a>
			  <a className="sidebar__content">Women's Fashion</a>
			  <hr/>
		  	<a className="sidebar__title">Help & Settings</a>
			  <a className="sidebar__content">Your Account</a>
			  <a className="sidebar__content">Customer Service</a>
			  <a className="sidebar__content">Sign In</a>
		  	<br/>
		  	<br/>

		</div>
	)
}

export default Sidebar
