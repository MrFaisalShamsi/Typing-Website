import React from 'react'
import "./Exam.css"
import Navbar from '../Navbar/Navbar'
import { Navigate, useNavigate } from 'react-router-dom' 

const Exam = () => {

    const navigate = useNavigate(); 


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/third');
    };

  return (
    <div className='exam'>
      <Navbar />
      <div className='exam-container' >
                <form onSubmit={handleSubmit} className='form' >
                    <div className="exam-div">
                        <h2>Language of Typing Test [ <span>Roll Number : 1048</span> ]</h2>
                    </div>
                    <div className="mid-container">
                        <div className="mid-left">
                            <ol>
                                <li>English Typing</li>
                                <li>Odiya Typing</li>
                            </ol>
                        </div>
                        <div className="mid">
                            <h6 className ='mid-heading' id='mid-heading1' >Duration 10 Minutes</h6>
                            <h6 className='mid-heading' id='mid-heading2'>Duration 10 Minutes</h6>
                        </div>
                        <div className="mid-right">
                            <button type='submit' id='btn1'>Proceed</button>
                            <button type='submit' id='btn2'>Proceed</button>
                        </div>
                    </div>
                    <div className="exam-div"></div>
                </form>
            </div>
            </div>
  )
}

export default Exam
