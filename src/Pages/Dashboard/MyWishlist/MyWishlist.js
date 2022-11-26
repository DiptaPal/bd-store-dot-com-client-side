import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const MyWishlist = () => {

    useTitle('My Wishlist')
    const { user } = useContext(AuthContext)
    const [deletingWishlist, setDeletingWishlist] = useState(null);
    const closeModal = () => {
        setDeletingWishlist(null);
    }

    const { data: wishlists = [], isLoading, refetch } = useQuery({
        queryKey: ['wishlists'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlists?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    })

    const handleDeletedWishlist = (wishlist) => {
        fetch(`http://localhost:5000/wishlists/delete?id=${wishlist._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${wishlist.productName} delete successful`)
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
                <h3 className='text-3xl m-7'>My Wishlist</h3>
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
                            {wishlists &&
                                wishlists?.map((wishlist, i) => <tr
                                    key={wishlist._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={wishlist.productImage} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                    <td>{wishlist.productName}</td>
                                    <td>${wishlist.productPrice}</td>
                                    {
                                        wishlist.status ?
                                            <td><button className='text-center text-white font-bold bg-green-500 px-3 rounded-3xl'>Paid</button></td>
                                            :
                                            <td>
                                                <label onClick={() => setDeletingWishlist(wishlist)} htmlFor="confirmation-modal" className='btn btn-error text-white mr-3'>Delete</label>
                                                <Link to={`/dashboard/wishlist/payment/${wishlist._id}`} className='btn btn-secondary text-white'>Pay Now</Link>
                                            </td>

                                    }
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingWishlist &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingWishlist.name}. It cannot be undone.`}
                    modalData={deletingWishlist}
                    successAction={handleDeletedWishlist}
                    closeModal={closeModal}
                    successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyWishlist;