import { useDispatch } from "react-redux";
import BaseModal from "../Modal";
import Button from "../../Button/Button";
import { buildModalButtonText, buildModalText } from "./ConfirmModalHelpers";
import { deleteContact } from "../../../../redux/contacts/operations";
import { activateSuccessToast } from "../../../../js/toast";

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

    // if (type === "update") {
    //   dispatch(updateContact(contactData))
    //     .unwrap()
    //     .then(() => {
    //       activateSuccessToast("Contact successfully updated");
    //     })
    //     .finally(() => {
    //       closeModal();
    //     });
    // }
  };

  return (
    <BaseModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
      <p>{buildModalText(type)}</p>
      <Button onClick={handleConfirmButtonClick} type="modal-window">
        {buildModalButtonText(type)}
      </Button>
    </BaseModal>
  );
};

export default ConfirmActionModal;
