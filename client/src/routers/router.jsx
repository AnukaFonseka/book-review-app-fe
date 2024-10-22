import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/book/:id',
            element: <SingleBook/>,
            loader: ({params}) => fetch(`http://51.20.82.6:3000/books/${params.id}`)
        },
      ]
    },
    {
      path: '/admin/dashboard',
      element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
      children: [
        {
          path: '',
          element: <Dashboard/>
        },
        {
          path: 'upload',
          element: <UploadBook/>
        },
        {
          path: 'manage',
          element: <ManageBooks/>
        },
        {
          path: 'edit-book/:id',
          element: <EditBook/>,
          loader: ({params}) => fetch(`http://51.20.82.6:3000/books/${params.id}`)
        }
      ]
    }, {
      path: "sign-up",
      element: <SignUp/>
    }, {
      path: "/login",
      element: <Login />
    }, {
      path: "logout",
      element: <Logout />
    } 
  ]);

  export default router


