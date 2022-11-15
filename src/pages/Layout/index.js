import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';

function Layout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
