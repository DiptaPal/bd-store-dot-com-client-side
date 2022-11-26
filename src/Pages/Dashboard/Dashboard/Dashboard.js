import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard')
    return (
        <div className='mx-5'>
            <div className='max-w-[1440px] mx-auto'><h2>Coming Soon</h2></div>
        </div>
    );
};

export default Dashboard;