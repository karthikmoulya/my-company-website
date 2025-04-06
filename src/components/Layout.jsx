import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <Navbar />
      <Outlet /> {/* This is where the pages will render */}
    </div>
  );
};

export default Layout;
