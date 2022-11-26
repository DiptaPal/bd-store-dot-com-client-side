import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Product from '../../Product/Product';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import Loader from '../../Shared/Loader/Loader';
import ReportedModal from '../../Shared/ReportedModal/ReportedModal';

const CategoryProducts = () => {
    const products = useLoaderData();
    const [bookingProduct, setBookingProduct] = useState(null)
    const [reportedProduct, setReportedProduct] = useState(null)

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        <Loader></Loader>
    }

    return (
        <>
            {
                products.length > 0 ?
                    <div className='mx-5 my-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto mt-10'>
                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                    setBookingProduct={setBookingProduct}
                                    setReportedProduct={setReportedProduct}
                                ></Product>)
                            }
                        </div>
                        {
                            bookingProduct &&
                            <BookingModal
                                bookingProduct={bookingProduct}
                                setBookingProduct={setBookingProduct}
                            ></BookingModal>
                        }
                        {
                            reportedProduct &&
                            <ReportedModal
                                reportedProduct={reportedProduct}
                                setReportedProduct={setReportedProduct}
                            ></ReportedModal>
                        }
                    </div>
                    :
                    <div className='max-w-[1440px] mx-auto my-[30vh]'>
                        <h2 className='text-center text-3xl'>No Product is Available. Coming Soon...</h2>
                    </div>
            }
        </>
    );
};

export default CategoryProducts;