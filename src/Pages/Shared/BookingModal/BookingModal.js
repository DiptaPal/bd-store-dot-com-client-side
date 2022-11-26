import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const BookingModal = ({bookingProduct, setBookingProduct }) => {
    const { productName, resalePrice, description, productImage, _id } = bookingProduct;

    const {user} = useContext(AuthContext)

    const date = format(new Date(), 'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const customerName = form.username.value;
        const customerEmail = form.email.value;
        const customerPhoneNo = form.phone.value;
        const customerAddress = form.location.value;

        const bookedProduct = {
            bookingDate: date,
            productId: _id,
            productName,
            productImage,
            productPrice: resalePrice, 
            customerName,
            customerEmail,
            customerPhoneNo,
            customerAddress
        }
        
        fetch('http://localhost:5000/bookingProducts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookedProduct) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Product successfully booked')
                setBookingProduct(null)
            }
            else{
                toast.error(data.message);             
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-secondary text-white btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <h3 className="text-base font-semibold mb-6">${resalePrice}</h3>
                    <p className='mb-4'>{description}</p>
                    <form onSubmit={handleBooking} className='flex flex-col gap-3'>

                        <input type="text" name='date' value={date} readOnly className="w-full input-ghost outline-none py-3 px-4 bg-gray-200 rounded-md font-semibold" />

                        <input type="text" name='username' defaultValue={user?.displayName} readOnly placeholder="Full Name" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />

                        <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Full Name" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />

                        <input type="text" name='phone' required placeholder="Phone Number" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />

                        <input type="text" name='location' required placeholder="Meeting Location" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />

                        <button type="submit" className='w-full btn btn-secondary text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;