import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import useTitle from '../../../Hooks/useTitle';


const AllBuyers = () => {
    useTitle('All Buyers')
    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json();
            return data;
        }
    })

    const handleDeletedBuyer = (buyer) => {
        fetch(`http://localhost:5000/buyers/${buyer.email}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    toast.success(`User ${buyer.name} delete successful`)
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
                <h3 className='text-3xl m-7'>My Buyers</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buyer Profile</th>
                                <th>Buyer Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyers &&
                                buyers?.map((buyer, i) => <tr
                                    key={buyer._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={buyer.img} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><label htmlFor="confirmation-modal"
                                    onClick={() => setDeletingBuyer(buyer)} className='btn btn-error text-white'>Delete</label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingBuyer && 
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
                modalData={deletingBuyer}
                successAction={handleDeletedBuyer}
                closeModal={closeModal}
                successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;