import React, { useContext } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../Hooks/useTitle';
import DashboardHeader from '../Pages/Shared/Header/DashboardHeader';
import SideNav from '../Pages/Dashboard/SideNav/SideNav';

const DashboardLayout = () => {
    useTitle('Dashboard')
    const { user } = useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gray-100">
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