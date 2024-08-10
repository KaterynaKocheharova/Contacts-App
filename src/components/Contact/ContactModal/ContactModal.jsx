import ConfirmActionModal from "../ConfirmActionModal/ConfirmActionModal";
import UpdateContactForm from "../UpdateContactForm/UpdateContactForm";

const ContactModal = ({ modalType, closeModal, modalIsOpen, contactData }) => {
  return (
    <>
      {modalType === "updating" ? (
        <UpdateContactForm
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          contactData={contactData}
          modalType={modalType}
        />
      ) : (
        <ConfirmActionModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          type={modalType}
          contactId={contactData.id}  
        />
      )}
    </>
  );
};

export default ContactModal;
