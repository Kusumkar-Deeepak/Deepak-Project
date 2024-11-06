// import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const handleServiceClick = () => {
    toast.info('Please scroll down to check the functionality.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <nav className="relative w-full p-8 bg-blue-600 text-white">
      <ToastContainer />
      
      {/* Logo positioned at the top left */}
      <div className="absolute top-4 left-4">
        <span className="text-2xl font-bold cursor-pointer">FinancePlus</span>
      </div>
      
      {/* Navigation Links positioned at the top right */}
      <div className="absolute top-4 right-4 flex space-x-6">
        <Link 
          to="/tax-calculator" 
          className="text-lg font-medium hover:text-gray-300" 
          onClick={handleServiceClick}
        >
          Tax Calculator
        </Link>
        
        <Link 
          to="/loan-calculator" 
          className="text-lg font-medium hover:text-gray-300" 
          onClick={handleServiceClick}
        >
          Loan Calculator
        </Link>
        
        <Link 
          to="/investment-calculator" 
          className="text-lg font-medium hover:text-gray-300" 
          onClick={handleServiceClick}
        >
          Investment Calculator
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
