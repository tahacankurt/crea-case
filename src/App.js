import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./routes";
import React from "react";

const router = createBrowserRouter(routes);
const App = () => (<RouterProvider router={router}/>)
export default App