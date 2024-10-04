import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/Login.css';
import logo from '../assets/Frame 427320692.png';
import loginimage from '../assets/3947041 1.png';

const Login = () => {
    const [userID, setUserID] = useState('');
    const [mobileNo, setMobileNo] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                userID,
                mobileNo, 
                password,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert('Invalid credentials');
        }
    };
    const handleMobileFocus = () => {
        if (!mobileNo.startsWith('+91')) {
            setMobileNo('+91 ');
        }
    };
    const handleMobileChange = (e) => {
        const input = e.target.value;
        if (input.length <= 14) { // Maximum length including '+91',space and 10 digits
            setMobileNo(input);
        }
    };
    return (
        <div className='loginpage'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
                <img className='loginimage' src={loginimage} alt="Login image" />
            </div>
            <div>
                <form onSubmit={handleLogin}>
                    <h2 className='invite'>Welcome To <span className='highlight'>Plunes AWC</span></h2>
                    <h4 className='subinvite'>Log-in To your Account</h4>
                    <div className='userid'>
                        <p className='subheading'>User ID</p>
                        <input
                            className='rectangle'
                            type="text"
                            placeholder="UserID"
                            value={userID}
                            onChange={(e) => setUserID(e.target.value)}
                            required
                        />
                    </div>
                    <div className='number'>
                        <p className='subheading'>Mobile No</p>
                        <input
                            className='rectangle'
                            type="tel" 
                            placeholder="Mobile No"
                            value={mobileNo}
                            onFocus={handleMobileFocus} // Add focus handler
                            onChange={handleMobileChange} // Use the change handler
                            required
                        />
                    </div>
                    <div className='password'>
                        <p className='subheading'>Password</p>
                        <input
                            className='rectangle'
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <p className='forgotpassword'>Forgot Your Password?</p>
                    </div>
                    <button className='loginbutton' type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
