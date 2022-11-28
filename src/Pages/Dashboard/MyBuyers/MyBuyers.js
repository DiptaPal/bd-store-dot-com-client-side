import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import Loader from '../../Shared/Loader/Loader';

const MyBuyers = () => {
    useTitle('My Buyers')
    const { user } = useContext(AuthContext)


    const { data: myBuyers = [], isLoading } = useQuery({
        queryKey: ['myBuyers', user.email],
        queryFn: async () => {
            const res = await fetch(`https://bd-store-dot-com-server-side.vercel.app/${user.email}`,{
                headers: {
                     authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }



    return (
        <div>
            <div className='px-10'>
                <h3 className='text-3xl m-7'>My Buyers({myBuyers.length})</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myBuyers &&
                                myBuyers?.map((myBuyer, i) => <tr
                                    key={myBuyer._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td>{myBuyer.customerName}</td>
                                    <td>{myBuyer.customerEmail}</td>
                                    <td><img src={myBuyer.productImage} className='w-16 h-16 rounded-full mx-auto' alt="" /></td>
                                    <td>{myBuyer.productName}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBuyers;