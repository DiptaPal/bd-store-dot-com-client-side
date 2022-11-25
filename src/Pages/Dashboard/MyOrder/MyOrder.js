import React, {useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyOrder = () => {

    const {user} = useContext(AuthContext)


    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }



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
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders &&
                                myOrders?.map((myOrder, i) => <tr
                                    key={myOrder._id}
                                    className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                                >
                                    <th>{i + 1}</th>
                                    <td><img src={myOrder.productImage} className='w-16 h-16 rounded-full' alt="" /></td>
                                    <td>{myOrder.productName}</td>
                                    <td>${myOrder.productPrice}</td>
                                    <td><button className='btn btn-error text-white'>Pay</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;