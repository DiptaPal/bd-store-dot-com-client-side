import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loader from '../../Shared/Loader/Loader';

const ReportedItems = () => {
    useTitle('Reported Items')
    const [deletingReportedProduct, setDeletingReportedProduct] = useState(null);
    const closeModal = () => {
        setDeletingReportedProduct(null);
    }

    const { data: reportedProduct = [], isLoading, refetch } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedProducts')
            const data = await res.json();
            return data;
        }
    })

    const handleReportedProduct = (reportedProduct) => {
        fetch(`http://localhost:5000/reportedProducts/${reportedProduct._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    toast.success(`${reportedProduct.productName} delete successful`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        <Loader></Loader>
    }

    return (
        <div>
            <div className='px-10'>
                <h3 className='text-3xl m-7'>Reported Products({reportedProduct.length})</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Product Name</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Report</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportedProduct &&
                                reportedProduct?.map((repProduct, i) => <tr
                                    key={repProduct._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={repProduct.productImage} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                    <td>{repProduct.productName}</td>
                                    <td>{repProduct.userName}</td>
                                    <td>{repProduct.userEmail}</td>
                                    <td>{repProduct.reportMessage}</td>
                                    <td><label htmlFor="confirmation-modal"
                                    onClick={() => setDeletingReportedProduct(repProduct)} className='btn btn-error text-white'>Delete</label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingReportedProduct && 
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingReportedProduct.productName}. It cannot be undone.`}
                modalData={deletingReportedProduct}
                successAction={handleReportedProduct}
                closeModal={closeModal}
                successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ReportedItems;