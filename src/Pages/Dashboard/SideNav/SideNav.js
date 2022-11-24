import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { SiProducthunt } from "react-icons/si";
import { BiExit } from "react-icons/bi";
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SideNav = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successful')
                navigate('/login')

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="py-4 w-80 bg-accent flex justify-between flex-col">
            <div>
                <Link className='inline-flex items-center pl-6'>
                    <div>
                        <img className='w-10 h-10 object-cover' src={logo} alt="logo" />
                    </div>
                    <div className='mt-1'>
                        <span className="text-lg sm:text-2xl font-extrabold tracking-wide text-white uppercase">
                            DB-Store.com
                        </span>
                    </div>
                </Link>
                <div className='mt-10 flex flex-col gap-3'>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className=" sm:hidden px-6 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className='flex items-center gap-2 text-gray-500 hover:text-white duration-500 px-6 py-2 hover:bg-gray-700'>
                        <AiFillHome className='text-xl'></AiFillHome>
                        <Link to='/'>Home</Link>
                    </div>
                    <NavLink
                        to='/dashboard/allusers'
                        className={({ isActive }) =>
                            isActive ?
                                "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                :
                                "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                        }
                    >
                        <FaUserFriends className='text-xl'></FaUserFriends>
                        <p>All Buyer</p>
                    </NavLink>
                    <NavLink
                        to='/dashboard/allbuyer'
                        className={({ isActive }) =>
                            isActive ?
                                "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                :
                                "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                        }
                    >
                        <FaUserFriends className='text-xl'></FaUserFriends>
                        <p>All Seller</p>
                    </NavLink>
                    <NavLink
                        to='/dashboard/allproducts'
                        className={({ isActive }) =>
                            isActive ?
                                "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                :
                                "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                        }
                    >
                        <AiFillShopping className='text-xl'></AiFillShopping>
                        <p>All Products</p>
                    </NavLink>
                    <NavLink
                        to='/dashboard/myproducts'
                        className={({ isActive }) =>
                            isActive ?
                                "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                :
                                "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                        }
                    >
                        <SiProducthunt className='text-xl'></SiProducthunt>
                        <p>My Product</p>
                    </NavLink>
                    <NavLink
                        to='/dashboard/addproduct'
                        className={({ isActive }) =>
                            isActive ?
                                "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                :
                                "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                        }
                    >
                        <IoIosAddCircle className='text-xl'></IoIosAddCircle>
                        <p>Add Product</p>
                    </NavLink>
                </div>
            </div>
            <div className='flex justify-between items-center px-4 mb-5'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={user?.photoURL} className='w-14 h-14 rounded-full border-2 border-secondary' alt="" />
                    </div>
                    <div className='text-white text-center'>
                        <p>{user?.displayName}</p>
                    </div>
                </div>
                <button onClick={handleLogout} className='btn btn-outline btn-error'>
                    <BiExit className='text-lg'></BiExit>
                    <p className='pl-2'>Logout</p>
                </button>
            </div>
        </div>
    );
};

export default SideNav;