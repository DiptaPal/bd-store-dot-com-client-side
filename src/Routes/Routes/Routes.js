import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import MyProducts from "../../Pages/Dashboard/MyProduct/MyProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
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
                path: '/dashboard/allusers',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            }
        ]
    }
])