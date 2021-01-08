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
        <div >
          <div class="form-style-5">
            <form onSubmit={handleSubmit}>
            <legend>Login Page</legend>
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your E-mail *"/>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password *"/>
            <input className="submit__btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
    )
}

export default Login
