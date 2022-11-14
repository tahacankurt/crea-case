import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

// Page components
import Login from "./pages/Auth/Login";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductList from "./pages/Product/List";
import ProductDetail from "./pages/Product/Detail";

const ProtectedRoutes = ({children}) => {
    const {user} = useSelector(state => state?.auth.payload);
    return user ? children : <Navigate to="/login"/>
}

const routes = [
    {
        path: "/login",
        element: <Login/>,
    },
    //Protected layout
    {
        path: "",
        element: <ProtectedRoutes><Layout/></ProtectedRoutes>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/products',
                element: <ProductList/>,
            },
            {
                path: '/products/:productId',
                element: <ProductDetail/>,
            },
        ]
    },
]

export default routes;