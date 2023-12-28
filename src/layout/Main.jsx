import React from 'react';
import Header from '../componet/Header/Header';
import Footer from '../componet/Footer/Footer';
import Home from '../componet/Banner/Banner';
import FamousChef from '../componet/FamousChef/FamousChef';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div>
            <Header></Header>
           
           <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;