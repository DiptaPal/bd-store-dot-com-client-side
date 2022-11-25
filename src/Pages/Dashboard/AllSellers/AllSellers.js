import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';

const AllSellers = () => {
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
        fetch(`http://localhost:5000/sellers/${seller._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    toast.success(`Seller ${seller.name} delete successful`)
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
                    <table className="table w-full">
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
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={seller.img} className='w-16 h-16 rounded-full' alt="" /></td>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button className='btn btn-success text-white'>Verify</button></td>
                                    <td><button onClick={() => handleDeletedSeller(seller)} className='btn btn-error text-white'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;