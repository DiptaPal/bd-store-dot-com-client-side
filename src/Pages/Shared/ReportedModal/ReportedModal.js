import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const ReportedModal = ({ reportedProduct, setReportedProduct }) => {
    const { productName, productImage, _id } = reportedProduct;

    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const reportMessage = form.report.value;

        const bookedProduct = {
            reportMessage,
            productId: _id,
            productName,
            productImage,
            userEmail: user.email,
            userName: user.displayName,
        }

        fetch('https://bd-store-dot-com-server-side.vercel.app/reportedProduct', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookedProduct) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Report add successful')
                setReportedProduct(null)
            }
            else{
                toast.error(data.message);             
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-secondary text-white btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>

                    <form onSubmit={handleBooking} className=''>
                        <div className='my-5'>
                            <label htmlFor="report" className='text-xl'>Report</label>
                            <textarea type="text" name='report' placeholder='Describe your problem...' className='mt-2 text-xl w-full h-56 resize-none border p-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' />
                        </div>
                        <button type="submit" className='w-full btn btn-secondary text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ReportedModal;