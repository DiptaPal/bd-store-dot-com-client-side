import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AllProduct from "../../Pages/AllProduct/AllProduct";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import AddCategory from "../../Pages/Dashboard/AddCategory/AddCategory";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllCategory from "../../Pages/Dashboard/AllCategory/AllCategory";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import CategoryProducts from "../../Pages/Home/CategoryProducts/CategoryProducts";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import EditProduct from "../../Pages/Dashboard/EditProduct/EditProduct";
import MyWishlist from "../../Pages/Dashboard/MyWishlist/MyWishlist";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <PrivateRoute><AllProduct></AllProduct></PrivateRoute>
            },
            {
                path: '/categoryProducts/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bd-store-dot-com-server-side.vercel.app/category/${params.id}`,{
                    headers: {
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/myOrder',
                element: <BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path: '/dashboard/myWishlist',
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://bd-store-dot-com-server-side.vercel.app/myOrder/${params.id}`,{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                   }
                })
            },
            {
                path: '/dashboard/wishlist/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://bd-store-dot-com-server-side.vercel.app/wishlists/${params.id}`,{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                   }
                })
            },
            {
                path: '/dashboard/addAProduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: '/dashboard/editProduct/:id',
                element: <SellerRoute><EditProduct></EditProduct></SellerRoute>,
                loader: ({params}) => fetch(`https://bd-store-dot-com-server-side.vercel.app/editProduct/${params.id}`,{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                   }
                })
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addCategory',
                element: <AdminRoute><AddCategory></AddCategory></AdminRoute>
            },
            {
                path: '/dashboard/allCategory',
                element: <AdminRoute><AllCategory></AllCategory></AdminRoute>
            },
        ]
    }
])