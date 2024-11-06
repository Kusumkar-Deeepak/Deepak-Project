import { useState } from 'react';

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [investmentTerm, setInvestmentTerm] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateInvestment = () => {
    if (!initialInvestment || !annualInterestRate || !investmentTerm) {
      alert('Please fill in all fields');
      return;
    }

    const principal = parseFloat(initialInvestment);
    const rate = parseFloat(annualInterestRate) / 100;
    const years = parseFloat(investmentTerm);

    const value = principal * Math.pow(1 + rate, years);
    setFutureValue(value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Investment Calculator</h1>
      
      <p className="text-center text-gray-600 mb-6 max-w-lg">
        Use this calculator to estimate the future value of your investments. Simply enter your initial investment amount, the expected annual interest rate, and the investment term in years. The calculator will provide the estimated future value based on compound interest.
      </p>

      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        
        <label className="block text-gray-700 font-medium mb-2" htmlFor="initialInvestment">
          Initial Investment ($):
        </label>
        <input
          type="number"
          id="initialInvestment"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
          placeholder="Enter initial investment amount"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mb-4">
          The amount you are initially investing.
        </p>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="annualInterestRate">
          Annual Interest Rate (%):
        </label>
        <input
          type="number"
          id="annualInterestRate"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
          placeholder="Enter interest rate"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mb-4">
          Expected interest rate per year as a percentage (e.g., 5 for 5%).
        </p>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="investmentTerm">
          Investment Term (years):
        </label>
        <input
          type="number"
          id="investmentTerm"
          value={investmentTerm}
          onChange={(e) => setInvestmentTerm(e.target.value)}
          placeholder="Enter investment term"
          className="w-full p-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mb-6">
          Duration of the investment in years.
        </p>

        <button
          onClick={calculateInvestment}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
        >
          Calculate Future Value
        </button>

        {futureValue !== null && (
          <div className="mt-6 bg-blue-50 p-4 rounded text-center text-blue-700 font-medium">
            <p>Future Value: ${futureValue.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentCalculator;
