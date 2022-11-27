import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';

const AllCategory = () => {
    useTitle('All Category')
    const [deletingCategory, setDeletingCategory] = useState(null);
    const closeModal = () => {
        setDeletingCategory(null);
    }

    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://bd-store-dot-com-server-side.vercel.app/categories',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
               }
            })
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteCategory = (category) =>{
        fetch(`https://bd-store-dot-com-server-side.vercel.app/categories/${category._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            toast.success(`${category.name} deleted successful`)
            refetch();
        })
    }

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <div className='px-10'>
                <h3 className='text-3xl m-7'>All Category({categories.length})</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Category Image</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories &&
                                categories?.map((category, i) => <tr
                                    key={category._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={category.categoryImage} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                    <td className='capitalize'>{category.categoryName}</td>
                                    <td><label onClick={() => setDeletingCategory(category)} htmlFor="confirmation-modal" className='btn btn-error text-white'>Delete</label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingCategory && 
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingCategory.name}. It cannot be undone.`}
                modalData={deletingCategory}
                successAction={handleDeleteCategory}
                closeModal={closeModal}
                successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllCategory;