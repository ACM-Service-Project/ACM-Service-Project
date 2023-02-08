import React from 'react';
import '../styles/login.css';
import LoginLogo from '../assets/loginLogo.png';


function Login(){
    return (
        <div id='main_container'>
            <div id='left_photo_container'></div>
            <div id='right_container'>
                <div id='content_container'>
                    <img id='login_logo' src={LoginLogo} alt='Family Crisis Center Logo'/>
                    <p id='title'>FOOD BANK</p>
                    <form>
                        <label for='username'>Username</label>
                        <input type="text" className='input' id='username' placeholder='Username' name='username'/>
                        <label for='password'>Password</label>
                        <input type="text" className='input' id='password' placeholder='Password' name='password'/>
                        <button type="submit" id='submit'>LOG IN</button>
                    </form>
                    {/* <Link to = '/login/register' className='logLink'>
                        Sign Up
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Login;