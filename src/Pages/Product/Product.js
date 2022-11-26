import React from 'react';
import { BsHeartFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { GoVerified } from "react-icons/go";

const Product = ({ product, setBookingProduct, setReportedProduct }) => {
    const { productName, productImage, location, quality, resalePrice, originalPrice, yearsOfUsed, username, verified } = product;
    return (
        <div className="card relative bg-base-100 shadow-xl">
            <figure><img src={productImage} alt="" /></figure>
            <div className="card-body">
                <div className="card-actions justify-end items-center">
                    <button className="text-secondary text-3xl">
                        <BsHeartFill></BsHeartFill>
                    </button>
                    <label htmlFor='report-modal' title='Report' onClick={() => setReportedProduct(product)} className="text-yellow-500 text-4xl cursor-pointer">
                        <MdReport></MdReport>
                    </label>
                </div>
                <h2 className="card-title">
                    {productName}
                </h2>
                <p>Location: {location}</p>
                <h3 className='text-xl font-semibold'>Resale Price: <span className='text-secondary'>${resalePrice}</span></h3>
                <p className='line-through text-red-500'>Original Price: ${originalPrice}</p>
                <p>Used: {yearsOfUsed}</p>
                <p>Quality: {quality}</p>

                <p className='flex items-center gap-2'>
                    <span>Seller: {username}</span>
                    <div className='flex items-end'>
                        {
                            verified === 'true' ? 
                                <div className='tooltip' data-tip="Verified"><GoVerified className='text-sky-500 text-lg'></GoVerified></div>
                                :
                                <div className='tooltip' data-tip="Unverified"><GoVerified className='text-lg'></GoVerified></div>
                        }
                    </div>
                </p>
                <p className='absolute top-4 right-4'><span className='badge badge-primary text-white shadow-2xl'>{product.status ? 'Sold' : 'Available'}</span></p>
                {
                    product.status ?

                        <button
                            onClick={() => setBookingProduct(product)}
                            htmlFor="booking-modal"
                            className='w-full btn btn-primary my-4'
                            disabled
                        >
                            Book Now
                        </button>
                        :

                        <label
                            onClick={() => setBookingProduct(product)}
                            htmlFor="booking-modal"
                            className='w-full btn btn-primary my-4'
                        >
                            Book Now
                        </label>
                }

            </div>
            {

            }
        </div>
    );
};

export default Product;