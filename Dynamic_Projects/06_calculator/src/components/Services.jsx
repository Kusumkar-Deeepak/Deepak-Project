// import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {
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
    <section id="services" className="p-10 bg-gray-100">
      <ToastContainer />
      <h2 className="text-3xl font-semibold text-center text-blue-700">Our Services</h2>
      <div className="mt-8 flex justify-center space-x-8">
        <Link to="/tax-calculator" className="p-6 bg-white rounded shadow-md text-center hover:bg-blue-100" onClick={handleServiceClick}>
          <h3 className="text-xl font-semibold">Tax Calculator</h3>
        </Link>
        <Link to="/loan-calculator" className="p-6 bg-white rounded shadow-md text-center hover:bg-blue-100" onClick={handleServiceClick}>
          <h3 className="text-xl font-semibold">Loan Calculator</h3>
        </Link>
        <Link to="/investment-calculator" className="p-6 bg-white rounded shadow-md text-center hover:bg-blue-100" onClick={handleServiceClick}>
          <h3 className="text-xl font-semibold">Investment Calculator</h3>
        </Link>
      </div>
    </section>
  );
};

export default Services;
