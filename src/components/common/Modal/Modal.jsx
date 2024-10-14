import Modal from "react-modal";
import css from "./Modal.module.css";

Modal.setAppElement("#App");

const BaseModal = ({ closeModal, modalIsOpen, children, modalType }) => {
  return (
    <Modal
    overlayClassName={css.overlay}
      className={modalType=== "updating" ? css["form-modal"] : css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
