import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    const { productName, productPrice } = booking
    // const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div>
            <div className='max-w-lg mx-auto mt-36 p-12 text-center shadow-md rounded-md bg-gray-50 text-gray-800'>
                <div>
                    <div className='m-7'>
                        <h3 className='text-3xl'>Payment <span className='font-bold'>${productPrice}</span> for</h3>
                        <h1 className="my-3 text-xl font-semibold mb-8"><span className='font-bold'>{productName}</span></h1>
                    </div>
                    <div className=''>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                booking={booking}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;