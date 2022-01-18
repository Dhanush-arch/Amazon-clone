import React, {useState} from 'react'
import './Register.css'
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../apiWrapper';
import {useHistory} from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      register(email, password1, password2).then(()=> {
              history.push('/login')
      })
    }
    return (
        <div className="login__main">
          <div class="form-style-5__login">
              <img src="https://seeklogo.com/images/A/amazon-logo-86547BFB54-seeklogo.com.png" alt=""/>
            <form onSubmit={handleSubmit}>
            <legend>Register</legend>
            <label>Name</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}  />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" name="password1" value={password1} onChange={e => setPassword1(e.target.value)} />
            <label>Retype Password</label>
            <input type="password" name="password2" value={password2} onChange={e => setPassword2(e.target.value)} />
                <input className="submit__btn" type="submit" value="Continue" />
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <p className="or__text">or</p>
            <button className="register__btn" onClick={()=> {
                    history.push('/login')
                }}>Already a User? Login</button>
          </div>
        </div>
    )
}

export default Register
