import { useDispatch } from "react-redux";
import BaseModal from "../../common/Modal/Modal";
import Button from "../../common/Button/Button";
import { buildModalText } from "./ConfirmModalHelpers";
import { deleteContact } from "../../../redux/contacts/operations";
import { activateSuccessToast, activateErrorToast } from "../../../utils/toast";
import { updateContact } from "../../../redux/contacts/operations";
import css from "./ConfirmActionModal.module.css";

const ConfirmActionModal = ({
  type,
  contactId,
  closeModal,
  modalIsOpen,
  values,
  contactData,
  closeUpdatingModal,
}) => {
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
    if (type === "confirming update") {
      dispatch(updateContact({ ...values, id: contactData.id }))
        .unwrap()
        .then(() => {
          activateSuccessToast("Contact successfully updated");
        })
        .catch((error) => {
          activateErrorToast(error.message);
        })
        .finally(() => {
          console.log("closing");
          closeModal();
          closeUpdatingModal();
        });
    }
  };

  return (
    <BaseModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
      <p>{buildModalText(type)}</p>
      <div className={css["buttons-container"]}>
        <Button
          onClick={() => {
            handleConfirmButtonClick();
          }}
          type="modal-window"
        >
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
