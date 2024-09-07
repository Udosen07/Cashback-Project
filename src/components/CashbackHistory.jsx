const CashbackHistory = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Cashback History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="mb-4 p-4 border-b">
            <p className="text-gray-600">Date: {transaction.date}</p>
            <p className="text-gray-600">
              Amount Earned: ${transaction.amount}
            </p>
            <p className="text-gray-600">
              Booking Details: {transaction.bookingDetails}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CashbackHistory;
