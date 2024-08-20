import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { activateErrorToast, activateSuccessToast } from "../../utils/toast";
import { selectIsAuthLoading } from "../../redux/auth/selectors";
import BaseForm from "../common/Form/Form";
import Loader from "../common/Loader/Loader";

const LoginForm = () => {
  const isLoading = useSelector(selectIsAuthLoading);
  const isLoginingInProgress = isLoading === "logining";
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        activateSuccessToast("Welcome");
      })
      .catch((error) => {
        if (error === "Request failed with status code 400") {
          activateErrorToast("Seems login or password are incorrect");
        }
      });
  };

  return (
    <div>
      <BaseForm onSubmit={onSubmit} type="login-form" />
      {isLoginingInProgress && (
        <Loader>Logining in progress. Please, wait.</Loader>
      )}
    </div>
  );
};

export default LoginForm;
