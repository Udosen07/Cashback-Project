import Modal from "./Modal";

const PromoCodeModal = ({ isOpen, onClose, promoCode }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Promo Code Generated">
      <p>
        Your promo code is: <strong>{promoCode}</strong>
      </p>
      <p>Use this code on your next booking to get discounts!</p>
    </Modal>
  );
};

export default PromoCodeModal;
