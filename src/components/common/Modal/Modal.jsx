import Modal from "react-modal";
import css from "./Modal.module.css";

Modal.setAppElement("#App");

const BaseModal = ({ closeModal, modalIsOpen, children, modalType }) => {
  console.log(modalType);
  return (
    <Modal
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
