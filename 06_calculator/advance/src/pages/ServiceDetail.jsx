// import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const serviceName = id === '1' ? 'Tax Calculator' : id === '2' ? 'Loan Calculator' : 'Investment Calculator';

  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold text-blue-700">{serviceName}</h2>
      <p className="mt-4 text-gray-600">
        Detailed information about {serviceName} will be available here.
      </p>
    </div>
  );
};

export default ServiceDetail;
