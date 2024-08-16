import { useDispatch } from "react-redux";
import { updateContact } from "../../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../../js/toast";
import BaseModal from "../../common/Modal/Modal";
import BaseForm from "../../common/Form/Form";

const UpdateContactForm = ({
  contactData,
  closeModal,
  modalIsOpen,
  modalType,
}) => {
  const dispatch = useDispatch();
  console.log(modalType);

  const handleSubmit = (values) => {
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
        // contact data is only needed for updating modal to get data for init values
        contactData={contactData}
        closeModal={closeModal}
      />
    </BaseModal>
  );
};

export default UpdateContactForm;
