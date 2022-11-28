import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { productPrice,customerName, productName, productId, customerEmail, _id } = booking;

    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("https://bd-store-dot-com-server-side.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (error) {
            setCardError(error.message)
            return
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: customerEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                transactionId: paymentIntent.id,
                productPrice,
                productName,
                productId,
                customerEmail,
                customerName,
                bookingId: _id

            }
            fetch('https://bd-store-dot-com-server-side.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id)
                        navigate('/dashboard/myOrder')
                    }
                })
        }
        setProcessing(false)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                className='border-2 border-secondary px-2 py-3 rounded-md'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#3A4256',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit"
                    className='btn bg-primary text-white mt-4'
                    disabled={!stripe || !clientSecret || processing}>
                    Conform Payment
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your Transaction ID : <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;