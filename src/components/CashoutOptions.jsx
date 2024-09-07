const CashoutOptions = ({ onDirectCashout, onConvertToPromoCode }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Cashout Options
      </h2>
      <div className="flex flex-wrap justify-around gap-4">
        <button
          onClick={onDirectCashout}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition text-sm md:text-base w-full sm:w-auto md:w-48"
        >
          Direct Cashout
        </button>
        <button
          onClick={onConvertToPromoCode}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition text-sm md:text-base w-full sm:w-auto md:w-48"
        >
          Convert to Promo Code
        </button>
      </div>
    </div>
  );
};

export default CashoutOptions;
