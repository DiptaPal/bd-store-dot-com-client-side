import React, {useState} from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Product from '../../Product/Product';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import Loader from '../../Shared/Loader/Loader';

const CategoryProducts = () => {
    const products = useLoaderData();
    const [bookingProduct, setBookingProduct] = useState(null)

    const navigation = useNavigation();

    if(navigation.state === "loading"){
        <Loader></Loader>
    }

    return (
        <div className='mx-5 my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto mt-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setBookingProduct={setBookingProduct}
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
        </div>
    );
};

export default CategoryProducts;