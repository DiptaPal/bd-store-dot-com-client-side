import React from 'react';
import img1 from '../../../assets/service/1.png'
import img2 from '../../../assets/service/2.png'
import img3 from '../../../assets/service/3.png'
import img4 from '../../../assets/service/4.png'
const Service = () => {
    return (
        <div className='flex items-center justify-around gap-4 border-2 border-gray-100 py-2 flex-wrap mb-32 mt-32'>
            <div className='flex items-center gap-3 px-6 xl:border-r xl:border-primary w-80'>
                <div className='p-2 rounded-full bg-base-200 border hover:cursor-pointer hover:border-primary' data-aos="zoom-in" data-aos-duration="1000">
                    <img src={img1} className='h-16 w-16 hover:scale-90 duration-300' alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-base'>24 X 7 Free Support</p>
                    <p className='text-sm'>Online Support 24/7</p>
                </div>
            </div>
            <div className='flex items-center gap-3 px-6 xl:border-r xl:border-primary w-80'>
                <div className='p-2 rounded-full bg-base-200 border hover:cursor-pointer hover:border-primary' data-aos="zoom-in" data-aos-duration="1000">
                    <img src={img2} className='h-16 w-16 hover:scale-90 duration-300' alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-base'>Money Back Guarantee</p>
                    <p className='text-sm'>100% Secure Payment</p>
                </div>
            </div>
            <div className='flex items-center gap-3 px-6 xl:border-r xl:border-primary w-80'>
                <div className='p-2 rounded-full bg-base-200 border hover:cursor-pointer hover:border-primary' data-aos="zoom-in" data-aos-duration="1000">
                    <img src={img3} className='h-16 w-16 hover:scale-90 duration-300' alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-base'>Special Gift Cards</p>
                    <p className='text-sm'>Give The Perfect Gift</p>
                </div>
            </div>
            <div className='flex items-center gap-3 px-6 w-80'>
                <div className='p-2 rounded-full bg-base-200 border hover:cursor-pointer hover:border-primary' data-aos="zoom-in" data-aos-duration="1000">
                    <img src={img4} className='h-16 w-16 hover:scale-90 duration-300' alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-base'>Worldwide Shipping</p>
                    <p className='text-sm'>On Order Over $99</p>
                </div>
            </div>
        </div>
    );
};

export default Service;