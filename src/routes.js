import Login from "./pages/Auth/Login";
import React from "react";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoutes = ({children}) => {
    const {user} = useSelector(state => state?.auth.payload);
    return user ? children : <Navigate to="/login"/>
}

const routes = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "",
        element: <ProtectedRoutes><Layout/></ProtectedRoutes>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
        ]
    },
]

export default routes;