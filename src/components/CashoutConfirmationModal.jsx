import Modal from "./Modal";

const CashoutConfirmationModal = ({ isOpen, onClose, cashoutDetails }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cashout Confirmation">
      <p>
        <strong>Amount:</strong> ${cashoutDetails.amount}
      </p>
      <p>
        <strong>Date:</strong> {cashoutDetails.date}
      </p>
      <p>
        <strong>Transaction ID:</strong> {cashoutDetails.transactionId}
      </p>
    </Modal>
  );
};

export default CashoutConfirmationModal;
