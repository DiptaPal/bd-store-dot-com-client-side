import React from 'react';

const Hero = ({ slider }) => {
    return (
        <div className="bg-black rounded-md px-6 sm:px-16 xl:px-32">
            <div className='sm:flex justify-between items-center'>
                <div className='w-full lg:w-1/2 py-16 xl:py-32'>
                    <div className='flex flex-col gap-4 sm:gap-6'>
                        <h1 className='text-2xl sm:text-5xl text-white font-bold text-center lg:text-left'>
                            Easy To Selling, Buying and Earn Money
                        </h1>
                        <h2 className='text-white text-sm sm:text-xl mx-auto sm:mx-0 text-center lg:text-left'>The BD-Store.com is the world’s largest online marketplace for authenticated laptop resale, buying. Known for its rigorous authentication process, which is overseen by experts, the site provides a safe and reliable platform for consumers to buy.</h2>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <button className="text-base shadow-lg sm:text-xl py-3 px-6 bg-primary rounded-md text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 hidden lg:block'>
                    <img className='object-cover' src={slider.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;