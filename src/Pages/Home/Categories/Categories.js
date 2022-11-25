import React from 'react';
import Category from '../Category/Category';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mt-44 mb-32'>
            <h1 className='text-2xl font-bold text-center uppercase'>All Categories</h1>
            <hr className='w-56 bg-primary pt-1 mx-auto' />
            <div className='mt-10'>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-wrap">
                    {
                        categories.map(category =>
                            <Category
                                key={category._id}
                                category={category}>
                            </Category>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;