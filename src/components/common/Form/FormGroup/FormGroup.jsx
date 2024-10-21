import { Field, ErrorMessage } from "formik";
import css from "./FormGroup.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useCallback, useState } from "react";

const FormGroup = ({ id, label, name, type, placeholder }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const toggleIsPasswordShown = useCallback(() => {
    setIsPasswordShown(!isPasswordShown);
  }, [isPasswordShown]);

  return (
    <div className={css["form-group"]}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      {type !== "password" && (
        <Field
          className={css["form-field"]}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      )}
      {type === "password" && (
        <Field
          className={css["form-field"]}
          id={id}
          name={name}
          type={isPasswordShown ? "text" : "password"}
          placeholder={placeholder}
        />
      )}
      <ErrorMessage
        className={css["error-message"]}
        name={name}
        component="div"
      />
      {type === "password" && (
        <button className={css["toggle-show-password-button"]} onClick={toggleIsPasswordShown} type="button">
          {isPasswordShown ? (
            <FaEyeSlash className={css.eye} />
          ) : (
            <FaEye className={css.eye} />
          )}
        </button>
      )}
    </div>
  );
};

export default FormGroup;
