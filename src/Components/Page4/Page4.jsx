import React from 'react';
// import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Instructions from '../Instructions/Instructions';
import Table from '../Table/Table';
import "./Page4.css";
import { Navigate, useNavigate } from 'react-router-dom';

const Page4 = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/page5');
    };
    return (
        <div className="page4">
        <form onSubmit={handleSubmit} >
            <Navbar />
            {/* <Header /> */}
            <Table />
            <Instructions />
            <button type='submit'>Proceed</button>
            </form>
        </div>
    );
};

export default Page4;