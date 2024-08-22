import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { activateErrorToast, activateSuccessToast } from "../../utils/toast";
import BaseForm from "../common/Form/Form";

const LoginForm = () => {
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
    </div>
  );
};

export default LoginForm;
