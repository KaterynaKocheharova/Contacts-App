import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../js/toast";
import { addContactValidationSchema } from "../../js/validation-schemas";
import BaseModal from "../common/Modal/Modal";
import BaseForm from "../common/Form/Form";

const UpdateContactForm = ({ contactData, closeModal, modalIsOpen }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    addContactValidationSchema
      .validate(values)
      .then(() => {
        dispatch(updateContact({ ...values, id: contactData.id }))
          .unwrap()
          .then(() => {
            activateSuccessToast("Contact successfully updated");
          })
          .catch((error) => {
            activateErrorToast(error.message);
          });
      })
      .catch(() => {
        activateErrorToast(
          "Make sure your contact has between 3 and 50 characters and the number has a minimum of 8 characters"
        );
      })
      .finally(() => {
        closeModal();
      })
  };

  return (
    <BaseModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <BaseForm onSubmit={handleSubmit} type="update-contact-form" contactData={contactData} />
    </BaseModal>
  );
};

export default UpdateContactForm;
