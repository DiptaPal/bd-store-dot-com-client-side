import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import DashboardHeader from '../Pages/Shared/Header/DashboardHeader';
import SideNav from '../Pages/Dashboard/SideNav/SideNav';

const DashboardLayout = () => {
    useTitle('Dashboard')
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gray-300">
                <DashboardHeader></DashboardHeader>
                <Outlet></Outlet>
                <ScrollRestoration />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <SideNav></SideNav>
            </div>
        </div>
    );
};

export default DashboardLayout;