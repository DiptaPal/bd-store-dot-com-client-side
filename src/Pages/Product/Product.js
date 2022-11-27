import React, { useContext } from 'react';
import { BsHeartFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { AuthContext } from '../../contexts/AuthProvider';
import { format, formatDistanceToNow } from 'date-fns';
import toast from 'react-hot-toast';
import useBuyer from '../../Hooks/useBuyer';
import Loader from '../Shared/Loader/Loader';

const Product = ({ product, setBookingProduct, setReportedProduct }) => {
    const { productName, productImage, location, quality, resalePrice, originalPrice, yearsOfUsed, username, verified, date: postDate } = product;

    const postedDate = formatDistanceToNow(
        new Date(postDate),
        { includeSeconds: true }
    )

    const fullDate = format(new Date(postDate), 'PPPPp')

    const { user } = useContext(AuthContext)

    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);


    const date = format(new Date(), 'PP');

    const handleWishlists = product => {
        const wishlists = {
            wishDate: date,
            productId: product._id,
            productName: product.productName,
            productImage: product.productImage,
            productPrice: product.resalePrice,
            customerName: user.displayName,
            customerEmail: user.email,
            customerPhotoNo: user.photoURL,
        }

        fetch('https://bd-store-dot-com-server-side.vercel.app/wishlists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },

            body: JSON.stringify(wishlists)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product added successfully')
                    setBookingProduct(null)
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div className="card relative bg-base-100 shadow-xl">
            <figure><img src={productImage} alt="" /></figure>
            <div className="card-body gap-3">
                <div className="card-actions justify-end items-center">
                    <div className="tooltip" data-tip="Wishlist">
                        <button disabled={!isBuyer} onClick={() => handleWishlists(product)} className="text-secondary text-3xl">
                            <BsHeartFill></BsHeartFill>
                        </button>
                    </div>

                    <div className="tooltip" data-tip="Report">
                        {
                            isBuyer ?
                                <label htmlFor="report-modal" onClick={() => setReportedProduct(product)} className="text-yellow-500 text-4xl cursor-pointer">
                                    <MdReport></MdReport>
                                </label>
                                :
                                <label onClick={() => setReportedProduct(product)} className="text-yellow-500 text-4xl">
                                    <MdReport></MdReport>
                                </label>
                        }

                    </div>
                </div>
                <h2 className="card-title text-2xl">
                    {productName}
                </h2>

                <div className='flex gap-2 items-end'>
                    <span className='text-2xl font-semibold'>${resalePrice}</span>
                    <span className='line-through text-red-700'><small className='text-base'>${originalPrice}</small></span>
                </div>

                <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-2 flex-wrap'>
                    <p className='flex gap-2 items-center'>
                        <MdLocationOn className='text-2xl'></MdLocationOn>
                        <span>{location}</span>
                    </p>
                    <div className='flex items-center gap-2 sm:justify-end'>
                        <span className='capitalize'>{username}</span>
                        <div className='flex items-end'>
                            {
                                verified === 'true' ?
                                    <div className='tooltip' data-tip="Verified"><GoVerified className='text-sky-500 text-lg'></GoVerified></div>
                                    :
                                    <div className='tooltip' data-tip="Unverified"><GoVerified className='text-lg'></GoVerified></div>
                            }
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2 flex-wrap'>
                    <p>Used: <span className='font-semibold'>{yearsOfUsed}</span></p>
                    <div className="tooltip" data-tip={fullDate}>
                        <p className='text-left'>Posted: <span className='font-semibold'>{postedDate} ago</span></p>
                    </div>
                </div>
                <p>Quality: <span className='capitalize'>{quality}</span></p>

                <p className='absolute top-4 right-4'><span className='badge badge-primary text-white shadow-2xl capitalize'>{product.status}</span></p>
                <label
                    onClick={() => setBookingProduct(product)}
                    htmlFor="booking-modal"
                    className='w-full btn btn-primary my-4'
                    disabled={(!isBuyer)}
                >
                    Book Now
                </label>
            </div>
        </div>
    );
};

export default Product;