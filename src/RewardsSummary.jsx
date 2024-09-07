import React, { useState } from "react";
import EarningsOverview from "./components/EarningsOverview";
import CashbackHistory from "./components/CashbackHistory";
import CashoutOptions from "./components/CashoutOptions";
import CashoutConfirmationModal from "./components/CashoutConfirmationModal";
import PromoCodeModal from "./components/PromoCodeModal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const initialRewardsData = {
  cashbackHistory: [
    {
      id: 1,
      date: "2024-08-28",
      amount: 25.0,
      bookingDetails: "Service A - Booking ID: 12345",
    },
    {
      id: 2,
      date: "2024-08-15",
      amount: 50.0,
      bookingDetails: "Service B - Booking ID: 67890",
    },
  ],
};
const RewardsSummary = () => {
  const [currentBalance, setCurrentBalance] = useState(1000);
  const [totalCashback, setTotalCashback] = useState(0);
  const [cashbackHistory, setCashbackHistory] = useState(
    initialRewardsData.cashbackHistory
  );
  const [isCashoutModalOpen, setIsCashoutModalOpen] = useState(false);
  const [isPromoCodeModalOpen, setIsPromoCodeModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [cashoutDetails, setCashoutDetails] = useState({});
  const [bookingAmount, setBookingAmount] = useState(0);

  const handleBookingAmountChange = (e) => {
    setBookingAmount(Number(e.target.value));
  };

  const handleNewBooking = () => {
    if (currentBalance <= 0) {
      toast.error(
        "Insufficient funds. Please add more funds to proceed with bookings."
      );
      return;
    }

    if (bookingAmount <= 0) {
      toast.error("Please enter a valid booking amount.");
      return;
    }

    if (bookingAmount > currentBalance) {
      toast.error("Booking amount cannot exceed the current balance.");
      return;
    }

    const cashback = bookingAmount * 0.015;
    setTotalCashback((prevTotal) => prevTotal + cashback);
    setCurrentBalance((prevBalance) => prevBalance - bookingAmount);

    const newTransaction = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      amount: cashback.toFixed(2),
      bookingDetails: `Booking - Amount: $${bookingAmount.toFixed(2)}`,
    };

    setCashbackHistory((prevHistory) => [...prevHistory, newTransaction]);
    toast.success(
      `You've earned $${cashback.toFixed(2)} cashback from this booking!`
    );
    setBookingAmount(0);
  };

  const handleDirectCashout = () => {
    if (totalCashback > 0) {
      const cashoutAmount = totalCashback;
      setCashoutDetails({
        amount: cashoutAmount,
        date: new Date().toLocaleDateString(),
        transactionId: Math.random().toString(36).substring(2, 9),
      });
      setTotalCashback(0);
      setIsCashoutModalOpen(true);
    } else {
      toast.error("Insufficient cashback for cashout.");
    }
  };

  const handleConvertToPromoCode = () => {
    if (totalCashback > 0) {
      const generatedCode = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();
      setPromoCode(generatedCode);
      setTotalCashback(0);
      setIsPromoCodeModalOpen(true);
    } else {
      toast.error("Insufficient cashback for promo code generation.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Rewards Summary</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Enter Booking Amount:
        </label>
        <input
          type="number"
          value={bookingAmount}
          onChange={handleBookingAmountChange}
          className="border border-gray-300 px-4 py-2 rounded w-full"
          placeholder="Enter the amount for your booking"
        />
        <button
          onClick={handleNewBooking}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-2"
        >
          Add Booking and Earn Cashback
        </button>
      </div>
      <EarningsOverview
        totalCashback={totalCashback}
        currentBalance={currentBalance}
      />
      <CashbackHistory transactions={cashbackHistory} />
      <CashoutOptions
        onDirectCashout={handleDirectCashout}
        onConvertToPromoCode={handleConvertToPromoCode}
      />
      <CashoutConfirmationModal
        isOpen={isCashoutModalOpen}
        onClose={() => setIsCashoutModalOpen(false)}
        cashoutDetails={cashoutDetails}
      />
      <PromoCodeModal
        isOpen={isPromoCodeModalOpen}
        onClose={() => setIsPromoCodeModalOpen(false)}
        promoCode={promoCode}
      />
      <ToastContainer />
    </div>
  );
};

export default RewardsSummary;
