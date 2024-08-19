import Modal from "react-modal";
import css from "./Modal.module.css";

Modal.setAppElement("#App");

const BaseModal = ({ closeModal, modalIsOpen, children, modalType }) => {
  console.log(modalType);
  return (
    <Modal
    // all modals have identical styles except for the one that has form updating contact form inside
      className={modalType=== "updating" ? css["form-modal"] : css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
