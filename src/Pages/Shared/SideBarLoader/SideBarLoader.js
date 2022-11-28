import React from 'react';
import { Triangle } from 'react-loader-spinner'

const SideBarLoader = () => {
    return (
        <div className='flex justify-center items-center my-36'>
            <Triangle
                height="40"
                width="40"
                color="#0046be"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default SideBarLoader;