import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdReport, MdDashboardCustomize } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { BiExit } from "react-icons/bi";
import { BsFillPeopleFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useAdmin from '../../../Hooks/useAdmin';
import useSeller from '../../../Hooks/useSeller';
import useBuyer from '../../../Hooks/useBuyer';

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

    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div className="pt-4 w-80 bg-accent flex justify-between gap-6 flex-col">
            <div>
                <Link to='/' className='inline-flex items-center pl-6'>
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
                    <Link to='/' className='flex items-center gap-2 text-gray-500 hover:text-white duration-500 px-6 py-2 hover:bg-gray-700'>
                        <AiFillHome className='text-xl'></AiFillHome>
                        <p>Home</p>
                    </Link>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            isActive ?
                                "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                :
                                "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                        }
                    >
                        <MdDashboardCustomize className='text-xl'></MdDashboardCustomize>
                        <p>Dashboard</p>
                    </NavLink>
                    {
                        isBuyer &&
                        <>
                            <NavLink
                                to='/dashboard/myOrder'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <FaShoppingCart className='text-xl'></FaShoppingCart>
                                <p>My Order</p>
                            </NavLink>
                            <NavLink
                                to='/dashboard/myWishlist'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <BsFillBookmarkHeartFill className='text-xl'></BsFillBookmarkHeartFill>
                                <p>My Wishlist</p>
                            </NavLink>
                        </>
                    }
                    {
                        isSeller &&
                        <>
                            <NavLink
                                to='/dashboard/addAProduct'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <HiOutlinePencilAlt className='text-xl'></HiOutlinePencilAlt>
                                <p>Add A Product</p>
                            </NavLink>

                            <NavLink
                                to='/dashboard/myProducts'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <FaShoppingCart className='text-xl'></FaShoppingCart>
                                <p>My Products</p>
                            </NavLink>
                            <NavLink
                                to='/dashboard/myBuyers'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <BsFillPeopleFill className='text-xl'></BsFillPeopleFill>
                                <p>My Buyers</p>
                            </NavLink>
                        </>
                    }
                    {
                        isAdmin &&
                        <>
                            <NavLink
                                to='/dashboard/allBuyers'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <BsFillPeopleFill className='text-xl'></BsFillPeopleFill>
                                <p>All Buyers</p>
                            </NavLink>

                            <NavLink
                                to='/dashboard/allSellers'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <BsFillPeopleFill className='text-xl'></BsFillPeopleFill>
                                <p>All Sellers</p>
                            </NavLink>

                            <NavLink
                                to='/dashboard/reportedItems'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <MdReport className='text-xl'></MdReport>
                                <p>Reported Items</p>
                            </NavLink>

                            <NavLink
                                to='/dashboard/allCategory'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <BiCategory className='text-xl'></BiCategory>
                                <p>All Category</p>
                            </NavLink>

                            <NavLink
                                to='/dashboard/addCategory'
                                className={({ isActive }) =>
                                    isActive ?
                                        "flex items-center gap-3 text-white border-white border-l-4 px-6 py-2"
                                        :
                                        "flex items-center gap-3 text-gray-400 hover:text-white duration-500 border-white px-6 py-2 hover:bg-gray-700"
                                }
                            >
                                <HiOutlinePencilAlt className='text-xl'></HiOutlinePencilAlt>
                                <p>Add Category</p>
                            </NavLink>
                        </>
                    }
                </div>
            </div>
            <div className='flex flex-col justify-between items-center px-2'>
                <div className='w-full py-4 flex flex-col justify-center items-center border-2 border-secondary rounded-md'>
                    <div>
                        <img src={user?.photoURL} className='w-14 h-14 rounded-full border-2 border-secondary' alt="" />
                    </div>
                    <div className='text-white text-center'>
                        <p>{user?.displayName}</p>
                    </div>
                    <div className='text-white text-center text-base'>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <button onClick={handleLogout} className='w-full btn btn-outline btn-error mt-2'>
                    <BiExit className='text-lg'></BiExit>
                    <p className='pl-2'>Logout</p>
                </button>
            </div>
        </div>
    );
};

export default SideNav;