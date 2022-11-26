import React, { useContext } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Lottie from 'lottie-react'
import { BsEmojiDizzy } from "react-icons/bs";
import dashboard from '../../../assets/dashbaord.json'
import { AuthContext } from '../../../contexts/AuthProvider';

const Dashboard = () => {
    useTitle('Dashboard')
    return (
        <div className="flex justify-center items-center mt-10">
            <section className="flex w-2/3 items-center h-full text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-2 text-center">
                    <h2 className='text-2xl'>Welcome to Dashboard</h2>
                    <div className='text-primary text-lg'><span>Be Careful <BsEmojiDizzy className='inline'></BsEmojiDizzy> !!!</span></div>
                    <Lottie className='block' animationData={dashboard} loop={true} />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;