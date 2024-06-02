import React from 'react';
// import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Instructions from '../Instructions/Instructions';
import Table from '../Table/Table';
import "./Page4.css";

const Page4 = () => {
    return (
        <div className="page4">
            <Navbar />
            {/* <Header /> */}
            <Table />
            <Instructions />
        </div>
    );
};

export default Page4;