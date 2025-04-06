import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-white shadow-md px-6 py-4 md:px-20 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-blue-600'>YourCompany</h1>

      {/* Desktop */}
      <ul className='hidden md:flex gap-6 text-base'>
        <li>
          <Link to='/' className='hover:text-blue-600'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/services' className='hover:text-blue-600'>
            Services
          </Link>
        </li>
        <li>
          <Link to='/about' className='hover:text-blue-600'>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='hover:text-blue-600'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button className='md:hidden' onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-10'>
          <li>
            <Link to='/' onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/services' onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
