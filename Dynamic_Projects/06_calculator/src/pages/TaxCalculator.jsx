import { useState } from 'react';

const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [taxBracket, setTaxBracket] = useState('');
  const [calculatedTax, setCalculatedTax] = useState(null);

  const taxBrackets = {
    '10': 0.10,
    '12': 0.12,
    '22': 0.22,
    '24': 0.24,
    '32': 0.32,
    '35': 0.35,
    '37': 0.37,
  };

  const handleCalculate = () => {
    if (!income || !taxBracket) {
      alert('Please enter both income and select a tax bracket');
      return;
    }
    const tax = parseFloat(income) * taxBrackets[taxBracket];
    setCalculatedTax(tax);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Tax Calculator</h1>
      
      <p className="text-center text-gray-600 mb-6 max-w-lg">
        This tax calculator helps you estimate your tax liability based on your annual income and selected tax bracket. 
        Simply enter your income and choose the appropriate tax rate to calculate your estimated tax.
      </p>

      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="income">
          Annual Income ($):
        </label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your annual income"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mb-4">
          Enter your total annual income before taxes. For example, if you earn $50,000, enter 50000.
        </p>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="taxBracket">
          Tax Bracket (%):
        </label>
        <select
          id="taxBracket"
          value={taxBracket}
          onChange={(e) => setTaxBracket(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your tax bracket</option>
          {Object.keys(taxBrackets).map((bracket) => (
            <option key={bracket} value={bracket}>
              {bracket}%
            </option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mb-6">
          Choose your tax bracket based on your income. For example, if your income falls within the 24% tax bracket, select 24.
        </p>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
        >
          Calculate Tax
        </button>

        {calculatedTax !== null && (
          <div className="mt-6 bg-blue-50 p-4 rounded text-center text-blue-700 font-medium">
            <p>Estimated Tax: ${calculatedTax.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxCalculator;
