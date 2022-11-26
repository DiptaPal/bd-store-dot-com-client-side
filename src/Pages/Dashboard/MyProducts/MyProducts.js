import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom'
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';

const MyProducts = () => {
    useTitle('My Product')
    const { user } = useContext(AuthContext)

    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    })


    const handleMakeAdvertise = (product) => {
        fetch(`http://localhost:5000/makeAdvertise/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Advertise done successful`)
                    refetch();
                }
            })
    }

    const handleDeletedProduct = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${product.productName} delete successful`)
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
                <h3 className='text-3xl m-7'>My Product({myProducts.length})</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Product Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Customize</th>
                                <th>Advertise</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myProducts &&
                                myProducts?.map((product, i) =>
                                    <tr
                                        key={product._id}
                                        className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                    >
                                        <th>{i + 1}</th>
                                        <td><img src={product.productImage} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                        <td>{product.productName}</td>
                                        <td>{product.date}</td>
                                        <td>
                                            {
                                                product.status ?
                                                    <span className='capitalize font-bold text-amber-600'>{product.status}</span>
                                                    :
                                                    <span className='font-bold text-secondary'>Available</span>
                                            }
                                        </td>
                                        <td>
                                            {
                                                product.status ?
                                                    ''
                                                    :
                                                    <Link to={`/dashboard/editProduct/${product._id}`} className='btn btn-primary text-white'>Edit</Link>
                                            }
                                        </td>
                                        <td>
                                            {
                                                product.status ?
                                                    ''
                                                    :

                                                    product.isAdvertise ?

                                                        <button className=' text-green-600 font-bold'>Advertise On</button>
                                                        :
                                                        <button onClick={() => handleMakeAdvertise(product)} className='btn text-white'>Make Advertise</button>

                                            }
                                        </td>
                                        <td>
                                            <label htmlFor="confirmation-modal" onClick={() => setDeletingProduct(product)}
                                                className='btn btn-error text-white'>Delete</label>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingProduct &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    modalData={deletingProduct}
                    successAction={handleDeletedProduct}
                    closeModal={closeModal}
                    successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;