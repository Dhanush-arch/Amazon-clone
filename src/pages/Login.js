import React, {useState} from 'react'
import './Login.css'
import {useSelector, useDispatch} from 'react-redux'
import {login, getId} from '../actions/getUserCred';
import {useHistory} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const get_cred = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      get_cred(login(email, password)).then(()=> {
          get_cred(getId()).then(()=> {
              history.push('/')
          })
      })
       // setTimeout(()=>{
       //     get_cred(getId());
       // }, 10)

  }


    return (
        <div className="login__main">
          <div class="form-style-5__login">
              <img src="https://seeklogo.com/images/A/amazon-logo-86547BFB54-seeklogo.com.png" alt=""/>
            <form onSubmit={handleSubmit}>
            <legend>Login</legend>
            <label>Email</label>
            <input required type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label>Password</label>
            <input required type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input className="submit__btn" type="submit" value="Continue" />
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <p className="or__text">or</p>
            <button className="register__btn" onClick={()=> {
                    history.push('/register')
                }}>Create your Amazon Account</button>
          </div>
        </div>
    )
}

export default Login
