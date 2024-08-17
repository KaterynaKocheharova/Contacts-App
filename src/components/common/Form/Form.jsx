import { Formik, Form } from "formik";
import { useId } from "react";
import getValidationSchema from "./validation-schemas";
import getInitialValues from "./form-init-values";
import { buildFormClassName, buildButtonText } from "./FormHelpers";
import Button from "../Button/Button";
import FormGroup from "./FormGroup";
import css from "./Form.module.css";

const BaseForm = ({ onSubmit, type, contactData, closeModal }) => {
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
        // INTI VALUES FOR ALL FORMS ARE EMPTY INITIALLY, AND ONLY FOR THE UPDATE-FORM THEY AREN'T
        type === "update-contact-form"
          ? { name: contactData.name, number: contactData.number }
          : getInitialValues(type)
      }
      validationSchema={getValidationSchema(type)}
      onSubmit={onSubmit}
    >
      <Form className={buildFormClassName(type)}>
        {isAddContactForm && (
          <>
            {/* FORM GROUP HAS LABEL, INPUT AND ERROR MESSAGE INSIDE */}
            <FormGroup id={nameId} label="Name" name="name" type="text" />
            <FormGroup id={numberId} label="Number" name="number" type="text" />
          </>
        )}

        {isUpdateContactForm && (
          <>
            <FormGroup id={nameId} label="Name" name="name" type="text" />
            <FormGroup id={numberId} label="Number" name="number" type="text" />
          </>
        )}

        {(isRegistrationForm || isLoginForm) && (
          <>
            <FormGroup id={emailId} label="Email" name="email" type="email" />
            <FormGroup
              id={passwordId}
              label="Password"
              name="password"
              type="password"
            />
          </>
        )}

        {isRegistrationForm && (
          <FormGroup id={nameId} label="Your name" name="name" type="text" />
        )}
        <div className={css["button-container"]}>
          <Button>{buildButtonText(type)}</Button>
          {/* IF THE TYPE IS UPDATE, EXTRA BUTTON IS NEEDED*/}
          {type === "update-contact-form" && (
            <Button onClick={closeModal}>BACK</Button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default BaseForm;
