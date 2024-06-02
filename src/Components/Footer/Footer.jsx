import React, { useState } from 'react';
import "./Footer.css"
import { Navigate, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/page6');
};

  return (
    <div className="footer">
    <form onSubmit={handleSubmit} >
      <input 
        type="checkbox" 
        id="checkKeys" 
        checked={checked} 
        onChange={handleCheckboxChange} 
      />
      <label htmlFor="checkKeys">
        I have checked all the keys and they are working properly, also the passage is clearly visible and readable.
      </label>
      <div className="btn-footers">
      <button
        type='submit' 
        className="proceed-button" 
        disabled={!checked} 
        onClick={() => alert("Proceeding to the next step")}
      >
        Proceed
      </button>
      </div>
      </form>
    </div>
  );
};

export default Footer;

