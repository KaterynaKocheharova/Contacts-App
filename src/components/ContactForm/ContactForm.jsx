import { useDispatch, useSelector } from "react-redux";
import BaseForm from "../common/Form/Form";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { activateSuccessToast, activateErrorToast } from "../../utils/toast";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = async (values, actions) => {
    const duplicateNumber = contacts.find(
      (item) => values.number === item.number
    );

    if (duplicateNumber) {
      activateErrorToast("Contact with this number already exists");
      return;
    }

    try {
      await dispatch(addContact(values)).unwrap();
      activateSuccessToast("Successfully created contact!");
      actions.resetForm();
    } catch (error) {
      activateErrorToast(error.message);
    }
  };

  return <BaseForm onSubmit={handleSubmit} type="add-contact-form" />;
}
