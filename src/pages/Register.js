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
        <div >
          <div class="form-style-5">
            <form onSubmit={handleSubmit}>
            <legend>Registration Page</legend>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}  placeholder="Your Name *"/>
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="Your E-mail *"/>
            <input type="password" name="password1" value={password1} onChange={e => setPassword1(e.target.value)}  placeholder="Password *"/>
            <input type="password" name="password2" value={password2} onChange={e => setPassword2(e.target.value)}  placeholder="ReType Password *"/>
            <input className="submit__btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
    )
}

export default Register
