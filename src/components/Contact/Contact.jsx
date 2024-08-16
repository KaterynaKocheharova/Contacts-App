import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { CiUser, CiPhone } from "react-icons/ci";
import ContactModal from "./ContactModal/ContactModal";
import { useModal } from "../../hooks/UseModal";
import css from "./Contact.module.css";

export default function Contact({ contactData }) {
  const { id, name, number } = contactData;
  const { modalIsOpen, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState("");

  const handleDeleteClick = () => {
    openModal();
  };

  const handleUpdateClick = () => {
    openModal();
  };

  return (
    <>
      <li className={css["contact-item"]}>
        <div className={css["contact-info-wrapper"]}>
          <div className={css["contact-text-box"]}>
            <CiUser className={css["contact-person-icon"]} />
            <p className={css["name-text"]}>{name}</p>
          </div>
          <div className={css["contact-text-box"]}>
            <CiPhone className={css["contact-phone-icon"]} />
            <p className={css["number-text"]}>{number}</p>
          </div>
        </div>
        <div className={css["button-box"]}>
          <button
            className={css["contact-btn"]}
            onClick={() => {
              setModalType("updating");
              handleUpdateClick({ id, name, number });
            }}
          >
            <FaPencilAlt className={css["button-icon"]} />
          </button>
          <button
            className={css["contact-btn"]}
            onClick={() => {
              setModalType("confirming deletion");
              handleDeleteClick();
            }}
          >
            <MdDeleteOutline className={css["button-icon"]} />
          </button>
        </div>
      </li>

      <ContactModal
        modalType={modalType}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        contactData={contactData}
      />
    </>
  );
}
