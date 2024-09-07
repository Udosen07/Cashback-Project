const EarningsOverview = ({ totalCashback, currentBalance }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Earnings Overview</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Total Cashback Earned:</p>
          <p className="text-2xl font-bold">${totalCashback.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-600">Current Balance:</p>
          <p className="text-2xl font-bold">${currentBalance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsOverview;
