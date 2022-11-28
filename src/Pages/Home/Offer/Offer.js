import React from 'react';

const Offer = () => {
    return (
        <div className='my-10'>
            <div className='relative' data-aos="zoom-in" data-aos-duration="2000">
                <img className='absolute inset-0 object-cover w-full h-full' src="https://cdn.shopify.com/s/files/1/0257/0492/3199/files/1_38825d21-c6d4-40c7-ae90-7921f5125b6c.jpg?v=1646456490" alt="" />
                <div className='relative bg-opacity-75 py-10 text-white text-center'>
                    <h1 className='text-3xl'>Rewards just for shopping!</h1>
                    <p className='text-xl'>Don’t forget to opt into Multistore News to have your offers and rewards delivered right to your inbox!</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;