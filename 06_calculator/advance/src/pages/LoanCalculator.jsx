import { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoanPayment = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      alert('Please fill in all fields');
      return;
    }

    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const payment = (
      principal * 
      monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    );

    setMonthlyPayment(payment);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Loan Calculator</h1>
      
      <p className="text-center text-gray-600 mb-6 max-w-lg">
        Use this loan calculator to determine your monthly payment based on the loan amount, annual interest rate, and loan term. Enter the details below and click the button to calculate your monthly payment.
      </p>

      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        
        <label className="block text-gray-700 font-medium mb-2" htmlFor="loanAmount">
          Loan Amount ($):
        </label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mb-4">
          The total amount of money you wish to borrow.
        </p>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="interestRate">
          Annual Interest Rate (%):
        </label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter interest rate"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mb-4">
          The annual interest rate charged on the loan (e.g., 5 for 5%).
        </p>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="loanTerm">
          Loan Term (years):
        </label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder="Enter loan term"
          className="w-full p-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mb-6">
          The duration for which you want to take the loan, in years.
        </p>

        <button
          onClick={calculateLoanPayment}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
        >
          Calculate Monthly Payment
        </button>

        {monthlyPayment !== null && (
          <div className="mt-6 bg-blue-50 p-4 rounded text-center text-blue-700 font-medium">
            <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
