import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import routes from './routes';

const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
