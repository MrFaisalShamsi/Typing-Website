import React, {useState} from 'react'
import "./Login.css"
import Nav from '../Nav/Nav'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const validRollno = '12345';
    const validPassword = '9810';
    const validPin = '1234';

    const [rollno, setRollno] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (rollno === validRollno && password === validPassword && pin === validPin) {
            localStorage.setItem("loggedin",true);
            navigate('/exam');
        } else {
            setErrorMessage('Invalid name, password, or pin');
        }
    };

    return (
        <div className='login' >
            <Nav />
            <div className='login-container' >
                <div className="heading">Your <span>Logo</span></div>
                <form onSubmit={handleSubmit} className='form' >
                    <div className="login-div">
                        <h2>CANDIDATE LOGIN</h2>
                    </div>
                    <div className="mid-container">
                        <div className="mid-left">
                            <h4>Roll Number</h4>
                            <h4>Password <span>(DOB-YY/MM/DD)</span></h4>
                            <h4>Pin Number</h4>
                        </div>
                        <div className="mid-right">
                            <input
                                type="text"
                                id="rollno"
                                value={rollno}
                                onChange={(e) => setRollno(e.target.value)} 
                                required />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required />
                            <input
                                type="text"
                                id="pin"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)} 
                                required />
                        </div>
                    </div>
                    <div className="login-div">
                        <button type='submit' className='btn'>Submit</button>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <p className='para'>Before Login, Check Your Keyboard Here</p>
                </form>
            </div>
            <textarea cols={82} rows={10} className='text-area'></textarea>
        </div>
    )
}

export default Login
