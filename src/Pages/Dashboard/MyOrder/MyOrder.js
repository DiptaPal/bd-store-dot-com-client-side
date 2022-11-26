import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';

const MyOrder = () => {
    useTitle('My Order')
    const { user } = useContext(AuthContext)
    const [deletingMyOrder, setDeletingMyOrder] = useState(null);
    const closeModal = () => {
        setDeletingMyOrder(null);
    }

    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    })

    const handleDeletedMyOrder = (myOrder) =>{
        fetch(`http://localhost:5000/myOrders/delete?id=${myOrder._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${myOrder.productName} delete successful`)
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
                <h3 className='text-3xl m-7'>My Product({myOrders.length})</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders &&
                                myOrders?.map((myOrder, i) => <tr
                                    key={myOrder._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={myOrder.productImage} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                    <td>{myOrder.productName}</td>
                                    <td>${myOrder.productPrice}</td>
                                    {
                                        myOrder.paid ?
                                            <td><button className='text-center text-white font-bold bg-green-500 px-3 rounded-3xl'>Paid</button></td>
                                            :
                                            <td>
                                                <label onClick={() => setDeletingMyOrder(myOrder)} htmlFor="confirmation-modal"  className='btn btn-error text-white mr-3'>Delete</label>
                                                <Link to={`/dashboard/payment/${myOrder._id}`} className='btn btn-secondary text-white'>Pay Now</Link>
                                            </td>

                                    }
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingMyOrder && 
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingMyOrder.name}. It cannot be undone.`}
                modalData={deletingMyOrder}
                successAction={handleDeletedMyOrder}
                closeModal={closeModal}
                successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyOrder;