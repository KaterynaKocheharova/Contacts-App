import { useState } from "react";
import { useSelector } from "react-redux";
import { selectContacts } from "../../../redux/contacts/selectors";
import { activateErrorToast } from "../../../utils/toast";
import BaseModal from "../../common/Modal/Modal";
import BaseForm from "../../common/Form/Form";
import ConfirmActionModal from "../ConfirmActionModal/ConfirmActionModal";

const UpdateContactForm = ({
  contactData,
  closeModal,
  modalIsOpen,
  modalType,
}) => {
  const contacts = useSelector(selectContacts);

  const [values, setValues] = useState(null);
  const [confirmingModalIsOpen, setModalIsOpen] = useState(false);

  const closeConfirmingModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (values) => {
    const duplicateNumber = contacts.find((item) => {
      if (item.id === contactData.id) {
        return false;
      }
      return values.number === item.number;
    });

    if (duplicateNumber) {
      activateErrorToast("Contact with this number already exists");
      return;
    }
    setValues(values);
    setModalIsOpen(true);
  };

  return (
    <>
      <BaseModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalType={modalType}
      >
        <BaseForm
          onSubmit={handleSubmit}
          type="update-contact-form"
          contactData={contactData}
          closeModal={closeModal}
        />
      </BaseModal>
      {values && (
        <ConfirmActionModal
        closeUpdatingModal={closeModal}
          closeModal={closeConfirmingModal}
          modalIsOpen={confirmingModalIsOpen}
          type="confirming update"
          values={values}
          contactData={contactData}
        />
      )}
    </>
  );
};

export default UpdateContactForm;
