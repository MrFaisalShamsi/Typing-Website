import React, { useState , useEffect } from 'react';
import './Header1.css';
import pic from "../../assets/kevinRushProfile.jpg"
import { formatTime } from '../../Utils/TimeUtils';

const Header1 = () => {

  const initialTime = 9 * 60 + 59; // 9 minutes and 59 seconds

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);



  return (
    <div className="header1">
      <div className="title1">Odia Typing - Odia</div>
      {/* <div className="font-size-controls">
      <button>A+</button>
      <button>A</button>
      <button>A-</button>
    </div> */}
      <div className="user-info1">
        <div className="user-details1">
        <img src={pic} alt="" />
        <div className="span">
          <span>Dummy_48</span>
          <span>S/O NA</span>
          <span>Roll No: 1048</span>
          </div>
        </div>
        <div className="timer">Time Left {formatTime(timeLeft)}</div>
      </div>
    </div>
  );
};

export default Header1;
