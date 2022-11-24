import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllCategory = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    })
    console.log(categories);

    return (
        <div>
            <div className='px-10'>
                <h3 className='text-3xl m-7'>All Category</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
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
                                    <td><img src={category.categoryImage} className='w-16 h-16 rounded-full' alt="" /></td>
                                    <td className='capitalize'>{category.categoryName}</td>
                                    <td><button className='btn btn-error text-white'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCategory;