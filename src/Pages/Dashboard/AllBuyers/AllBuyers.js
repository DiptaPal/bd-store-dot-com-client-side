import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className='px-10'>
                <h3 className='text-3xl m-7'>My Buyers</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buyer Profile</th>
                                <th>Buyer Name</th>
                                <th>Email</th>
                                <th>Verification</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyers &&
                                buyers?.map((buyer, i) => <tr
                                    key={buyer._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={buyer.img} className='w-16 h-16 rounded-full' alt="" /></td>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button className='btn btn-success text-white'>Verify</button></td>
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

export default AllBuyers;