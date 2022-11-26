import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import useTitle from '../../../Hooks/useTitle';
import { GoVerified } from "react-icons/go";

const AllSellers = () => {
    useTitle('All Sellers')
    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = () => {
        setDeletingSeller(null);
    }
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/sellers')

                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeletedSeller = (seller) => {
        fetch(`http://localhost:5000/sellers/${seller.email}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Seller ${seller.name} delete successful`)
                    refetch();
                }
            })
    }

    const handleVerifiedSeller = (seller) => {
        fetch(`http://localhost:5000/sellers/verified/${seller.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Verify successful`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }



    return (
        <div>
            <div className='px-10'>
                <h3 className='text-3xl m-7'>My Sellers({sellers.length})</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Seller Profile</th>
                                <th>Seller Name</th>
                                <th>Email</th>
                                <th>Verification</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers &&
                                sellers?.map((seller, i) => <tr
                                    key={seller._id}
                                    className={`${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={seller.img} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                    <td>
                                        <div className='flex items-center justify-center gap-2'>
                                            <span>{seller.name}</span>
                                            <span className='flex items-center'>{
                                                seller.verified ?
                                                    <div className='tooltip' data-tip="Verified"><GoVerified className='text-sky-500 text-base'></GoVerified></div>
                                                    :
                                                    <div className='tooltip' data-tip="Unverified"><GoVerified className='text-base'></GoVerified></div>
                                            }
                                            </span>
                                        </div>
                                    </td>

                                    <td>{seller.email}</td>

                                    {
                                        seller.verified ?
                                            <td><button className=' text-green-600 font-bold'>Verified</button></td>
                                            :
                                            <td><button onClick={() => handleVerifiedSeller(seller)} className='btn text-white'>Verify</button></td>

                                    }

                                    <td><label htmlFor="confirmation-modal" onClick={() => setDeletingSeller(seller)} className='btn btn-error text-white'>Delete</label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingSeller &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    modalData={deletingSeller}
                    successAction={handleDeletedSeller}
                    closeModal={closeModal}
                    successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;