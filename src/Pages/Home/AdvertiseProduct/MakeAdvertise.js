import React from 'react';

const MakeAdvertise = ({ adProduct }) => {

    const { productImage, productName, resalePrice, originalPrice, description, status } = adProduct;



    return (
        <div className="cd1 w-full h-80 relative overflow-hidden cursor-pointer  shadow-lg border-2">
            <div className='flex justify-center items-center'>
                <img className='w-full h-80 object-cover object-center' src={productImage} alt="" />
            </div>
            <div className="cd-body1 w-full h-full absolute top-0 bg-gray-700 opacity-90 flex flex-col gap-2 items-center justify-center p-2">

                <h2 className="card-title text-white text-center">
                    {productName}
                </h2>
                <p className='text-white'>{description}</p>
                <h3 className='text-xl font-semibold text-white'>Resale Price: <span className='text-secondary'>${resalePrice}</span></h3>
                <p className='text-white'>Original Price: <span className='line-through text-secondary'>${originalPrice}</span></p>
            </div>
        </div>
    );
};

export default MakeAdvertise;