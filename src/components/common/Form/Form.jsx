import { Formik, Form } from "formik";
import { useId } from "react";
import getValidationSchema from "./validation-schemas";
import getInitialValues from "./form-init-values";
import { buildFormClassName, buildButtonText } from "./FormHelpers";
import Button from "../Button/Button";
import FormGroup from "./FormGroup/FormGroup";
import css from "./Form.module.css";

const BaseForm = ({ onSubmit, type, contactData, closeModal }) => {
  // contactData is needed for update-contact form
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();
  const numberId = useId();

  const isAddContactForm = type === "add-contact-form";
  const isUpdateContactForm = type === "update-contact-form";
  const isRegistrationForm = type === "registration-form";
  const isLoginForm = type === "login-form";

  return (
    <Formik
      initialValues={
        // init values for almaost all form they are empty initially and are taken from the function,
        // but for update-contact form there are taken from contactData
        // so that the user will be able to see what he's editing
        type === "update-contact-form"
          ? { name: contactData.name, number: contactData.number }
          : getInitialValues(type)
      }
      validationSchema={getValidationSchema(type)}
      onSubmit={onSubmit}
    >
      <Form className={buildFormClassName(type)}>
        {(isAddContactForm || isUpdateContactForm) && (
          <>
            {/* form group has a label, input, and error message inside */}
            <FormGroup
              id={nameId}
              label="Name"
              name="name"
              type="text"
              placeholder="Olga"
            />
            <FormGroup
              id={numberId}
              label="Number"
              name="number"
              type="tel"
              placeholder="+380950066297"
            />
          </>
        )}

        {(isRegistrationForm || isLoginForm) && (
          <>
            <FormGroup
              id={emailId}
              label="Email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />
            <FormGroup
              id={passwordId}
              label="Password"
              name="password"
              type="password"
              placeholder="your password"
            />
          </>
        )}

        {isRegistrationForm && (
          <FormGroup
            id={nameId}
            label="Your name"
            name="name"
            type="text"
            placeholder="Olga"
          />
        )}

        <div className={css["button-container"]}>
          <Button>{buildButtonText(type)}</Button>
          {/* if type is update, extra button is needed*/}
          {type === "update-contact-form" && (
            <Button onClick={closeModal}>BACK</Button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default BaseForm;
