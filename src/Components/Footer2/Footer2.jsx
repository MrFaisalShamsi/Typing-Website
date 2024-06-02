import React, { useState } from 'react';
import "./Footer2.css"
import { Navigate, useNavigate } from 'react-router-dom';

const Footer2 = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/page7');
};

  return (
    <div className="footer">
      <form onSubmit={ handleSubmit }>
        <div className="confirmation">
          <input
            type="checkbox"
            id="confirm"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="confirm">
            I confirm that I have read and understood the instructions.
          </label>
        </div>
        <div className="btn-footer">
          <button
            type='submit'
            className="proceed-button"
            disabled={!checked}
            onClick={() => alert("Ready to begin")}
          >
            I am ready to begin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Footer2;