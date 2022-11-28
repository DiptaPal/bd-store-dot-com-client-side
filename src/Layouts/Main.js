import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <div className='bg-black text-white'>
                <Footer></Footer>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Main;