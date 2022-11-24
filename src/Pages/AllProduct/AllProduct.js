import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Product from '../Product/Product';

const AllProduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default AllProduct;