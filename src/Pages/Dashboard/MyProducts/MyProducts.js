import React from 'react';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className='px-10'>
                <h3 className='text-3xl m-7'>My Product</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Product Name</th>
                                <th>Date</th>
                                <th>Advertise</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products &&
                                products?.map((product, i) => <tr
                                    key={product._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={product.productImage} className='w-16 h-16 rounded-full' alt="" /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.date}</td>
                                    <td><button className='btn btn-success text-white'>Make Advertise</button></td>
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

export default MyProducts;