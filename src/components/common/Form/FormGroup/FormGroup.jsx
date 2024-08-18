import { Field, ErrorMessage } from "formik";
import css from "./FormGroup.module.css";

const FormGroup = ({ id, label, name, type }) => {
  return (
    <div className={css["form-group"]}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <Field className={css["form-field"]} id={id} name={name} type={type} />
      <ErrorMessage
        className={css["error-message"]}
        name={name}
        component="div"
      />
    </div>
  );
};

export default FormGroup;
