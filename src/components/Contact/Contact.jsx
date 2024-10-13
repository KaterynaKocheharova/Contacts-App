import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { CiUser, CiPhone } from "react-icons/ci";
import ContactModal from "./ContactModal/ContactModal";
import css from "./Contact.module.css";

export default function Contact({ contactData }) {
  const { name, number } = contactData;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  const handleDeleteClick = () => {
    setModalType("confirming deletion");
    openModal();
  };

  const handleUpdateClick = () => {
    setModalType("updating");
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
            <a href={`tel: ${number}`} className={css["number-text"]}>
              {number}
            </a>
          </div>
        </div>
        <div className={css["button-box"]}>
          <button className={css["contact-btn"]} onClick={handleUpdateClick}>
            <FaPencilAlt className={css["button-icon"]} />
          </button>
          <button className={css["contact-btn"]} onClick={handleDeleteClick}>
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
