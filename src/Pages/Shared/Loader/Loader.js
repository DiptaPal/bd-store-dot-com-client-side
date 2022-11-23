import React from 'react';
import { Puff } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center my-36'>
            <Puff
                height="150"
                width="150"
                radisu={1}
                color="#0046be"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;