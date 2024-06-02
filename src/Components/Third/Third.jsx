import React from 'react'
import "./Third.css"
import Navbar from '../Navbar/Navbar'
import { Navigate, useNavigate } from 'react-router-dom'

const Third = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/page4');
  };


  return (
    <div className='third' >
      <Navbar />
      <div className='third-container' >
        <form onSubmit={handleSubmit} className='form' >
          <div className="third-div">
            <h2>Select Language of Typing Test</h2>
          </div>
          <div className="mid-third-container">
            <div className="mid-third-left">
              <input type="radio" className='ring' />
              <h6>Odiya Font ( Inscript Layout )</h6>
              <p>10 Minutes</p>
            </div>
            <div className="mid-third">
              <h4>Odiya Typing Test</h4>
              <button type='submit' id='btn1'>Proceed</button>
            </div>
            <div className="mid-third-right">
              <p>Use ALT+SHIFT Key To Change Keyboard Layout To Odiya ( Odiya-Inscript Layout ) For Typing </p>
            </div>
          </div>
          <div className="third-div"></div>
        </form>
      </div>
    </div>
  )
}

export default Third
