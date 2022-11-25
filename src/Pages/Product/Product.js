import React from 'react';
import { BsHeartFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";

const Product = ({ product }) => {
    const { productName, productImage, location, quality, resalePrice, originalPrice, yearsOfUsed, description } = product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={productImage} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                </h2>
                <p>Location: {location}</p>
                <h3 className='text-xl font-semibold'>Resale Price: <span className='text-secondary'>${resalePrice}</span></h3>
                <p className='line-through text-red-500'>Original Price: ${originalPrice}</p>
                <p>Upto Use: {yearsOfUsed}</p>
                <div className="card-actions justify-end items-center">
                    <button className="text-pink-500 text-3xl">
                        <BsHeartFill></BsHeartFill>
                    </button>
                    <button className="text-yellow-500 text-4xl">
                        <MdReport></MdReport>
                    </button>
                </div>
                <button className='w-full btn btn-primary my-4'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;