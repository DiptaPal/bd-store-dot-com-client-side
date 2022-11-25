import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Product from '../Product/Product';
import Loader from '../Shared/Loader/Loader';

const AllProduct = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        <Loader></Loader>
    }
    return (
        <div className='mx-5 my-10'>
            <h1 className='text-2xl font-bold text-center uppercase'>Category: All</h1>
            <hr className='w-52 bg-primary pt-1 mx-auto' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto mt-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProduct;