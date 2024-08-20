import { useDispatch, useSelector } from "react-redux";
import BaseForm from "../common/Form/Form";
import Loader from "../common/Loader/Loader";
import { register } from "../../redux/auth/operations";
import { activateErrorToast, activateSuccessToast } from "../../utils/toast";
import { selectIsAuthLoading } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const isLoading = useSelector(selectIsAuthLoading);
  const isRegisteringInProgress = isLoading === "registering";
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
      {isRegisteringInProgress && (
        <Loader>Registering you. Please, wait</Loader>
      )}
    </div>
  );
};

export default RegistrationForm;
