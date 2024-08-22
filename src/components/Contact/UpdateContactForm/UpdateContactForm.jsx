import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../../redux/contacts/selectors";
import { updateContact } from "../../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../../utils/toast";
import BaseModal from "../../common/Modal/Modal";
import BaseForm from "../../common/Form/Form";

const UpdateContactForm = ({
  contactData,
  closeModal,
  modalIsOpen,
  modalType,
}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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

    dispatch(updateContact({ ...values, id: contactData.id }))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully updated");
      })
      .catch((error) => {
        activateErrorToast(error.message);
      })
      .finally(() => {
        closeModal();
      });
  };

  return (
    <BaseModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      // need to pass modal type because in case of type "updating" the styles will be different from base modal styles
      modalType={modalType}
    >
      <BaseForm
        onSubmit={handleSubmit}
        type="update-contact-form"
        contactData={contactData}
        closeModal={closeModal}
      />
    </BaseModal>
  );
};

export default UpdateContactForm;
