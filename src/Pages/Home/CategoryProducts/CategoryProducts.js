import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Product/Product';

const CategoryProducts = () => {
    const products = useLoaderData();
    return (
        <div className='mx-5 my-10'>
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

export default CategoryProducts;