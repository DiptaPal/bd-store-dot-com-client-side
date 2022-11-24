import React, { useState } from 'react';
import './Category.css'

const Category = ({ slider }) => {
    return (
        <div className="cd w-full h-64 relative overflow-hidden">
            <div className='flex justify-center items-center'>
                <img src={slider.image} className='w-64 h-64 object-cover object-center' alt="Shoes" />
            </div>
            <div className={`cd-body w-full h-full absolute top-0 bg-[#04050538] backdrop-blur-[5px]`}>
                <div className='flex justify-center items-center mt-24'>
                    <button className='btn bg-primary hover:bg-primary border-none'>Go Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;