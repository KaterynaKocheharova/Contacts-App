import { useDispatch } from "react-redux";
import BaseForm from "../common/Form/Form";
import { register } from "../../redux/auth/operations";
import { activateErrorToast, activateSuccessToast } from "../../utils/toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        activateSuccessToast("Welcome!");
      })
      .catch((error) => {
        if (error === "Request failed with status code 400") {
          activateErrorToast("Seems the email is already in use");
        }
      });
  };

  return (
    <div>
      <BaseForm onSubmit={onSubmit} type="registration-form" />
    </div>
  );
};

export default RegistrationForm;
