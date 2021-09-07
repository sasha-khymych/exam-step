import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';



function Login() {
    const history = useHistory();
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');

    const loginUser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }
    const singUpUser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    return(
        <div className="login">
            <Link to="/">
                <img className="login-logo" alt="logo" src="http://pngimg.com/uploads/simpsons/simpsons_PNG92.png" />
            </Link>
            <div className="login-container">
                <h1>Sing In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginUser} type="submit" className="login-singInButton">Sing In </button><br/>
                    <p>If you do not have an account</p>
                    <button onClick={singUpUser} className="login-registerButton">Create New Account</button>
                </form>
            </div>
        </div>
    )
}



export default Login