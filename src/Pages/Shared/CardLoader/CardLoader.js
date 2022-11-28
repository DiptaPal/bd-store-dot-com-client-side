import React from 'react';
import { RotatingLines } from 'react-loader-spinner'

const CardLoader = () => {
    return (
        <div className='flex justify-center items-center my-36'>
            <RotatingLines
                strokeColor="#0046be"
                strokeWidth="5"
                animationDuration="0.75"
                width="42"
                visible={true}
            />
        </div>
    );
};

export default CardLoader;