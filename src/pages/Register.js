import React from 'react'
import './Register.css'

function Register() {
    return (
        <div >
          <div class="form-style-5">
            <form>
            <legend>Registration Page</legend>
            <input type="text" name="name" placeholder="Your Name *"/>
            <input type="email" name="email" placeholder="Your E-mail *"/>
            <input type="password" name="password1" placeholder="Password *"/>
            <input type="password" name="password2" placeholder="ReType Password *"/>
            <input className="submit__btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
    )
}

export default Register
