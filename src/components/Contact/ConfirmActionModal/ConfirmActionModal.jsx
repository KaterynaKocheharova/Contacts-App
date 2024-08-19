import { useDispatch } from "react-redux";
import BaseModal from "../../common/Modal/Modal";
import Button from "../../common/Button/Button";
import { buildModalText } from "./ConfirmModalHelpers";
import { deleteContact } from "../../../redux/contacts/operations";
import { activateSuccessToast } from "../../../utils/toast";
import css from "./ConfirmActionModal.module.css";

const ConfirmActionModal = ({ type, contactId, closeModal, modalIsOpen }) => {
  const dispatch = useDispatch();

  const handleConfirmButtonClick = () => {
    if (type === "confirming deletion") {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          activateSuccessToast("Contact successfully deleted");
        })
        .finally(() => {
          closeModal();
        });
    }
    // later code can be expanded if we need other modal types
  };

  return (
    <BaseModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
      <p>{buildModalText(type)}</p>
      <div className={css["buttons-container"]}>
        <Button onClick={handleConfirmButtonClick} type="modal-window">
          YES
        </Button>
        <Button onClick={closeModal} type="modal-window">
          NO
        </Button>
      </div>
    </BaseModal>
  );
};

export default ConfirmActionModal;
