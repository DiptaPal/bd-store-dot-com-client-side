import React from 'react';
import { BsHeartFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { GoVerified } from "react-icons/go";

const MakeAdvertise = ({ adProduct }) => {

    const { productImage, productName, resalePrice, originalPrice, description } = adProduct;



    return (

        <div className="cd1 w-full h-80 relative overflow-hidden cursor-pointer  shadow-lg border-2">
            <div className='flex justify-center items-center'>
                <img className='w-full h-80 object-cover object-center' src={productImage} alt="" />
            </div>
            <div className="cd-body1 w-full h-full absolute top-0 bg-secondary flex flex-col gap-2 items-center justify-center p-2">

                <h2 className="card-title text-black text-center">
                    {productName}
                </h2>
                <p className='text-black'>{description}</p>
                <h3 className='text-xl font-semibold text-black'>Resale Price: <span className='text-primary'>${resalePrice}</span></h3>
                <p className='line-through text-red-700'>Original Price: ${originalPrice}</p>
            </div>
        </div>
    );
};

export default MakeAdvertise;