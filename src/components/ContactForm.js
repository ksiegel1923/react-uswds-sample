import React, { useState } from "react";
import {
  Form,
  Label,
  TextInput,
  Textarea,
  Button,
  FormGroup,
  ErrorMessage,
  Link,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import validator from "validator";

function ContactForm() {
  const { t } = useTranslation();
  const [formInput, setFormInput] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessages, setErrorMessages] = useState([]);

  const handleChange = ({ target }) => {
    setFormInput({
      ...formInput,
      [target.name]: target.value,
    });
  };

  const verifyEmail = () => {
    return validator.isEmail(formInput.email);
  };

  const createError = (errorLink, field) => {
    return (
      <ErrorMessage key={`${field}-error`}>
        <Link href={errorLink}>{t(`${field}-error`)}</Link>
      </ErrorMessage>
    );
  };

  const handleSubmit = () => {
    const errors = [];
    for (const field in formInput) {
      if (field === "email" && !verifyEmail()) {
        errors.push(createError(`#${field}`, field));
      } else if (formInput[field] === "") {
        errors.push(createError(`#${field}`, field));
      }
    }
    setErrorMessages(errors);
  };

  return (
    <Form large>
      {errorMessages.length !== 0 && errorMessages}
      <FormGroup>
        <Label htmlFor="email">{t("contact.form.email")}</Label>
        <TextInput
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subject">{t("contact.form.subject")}</Label>
        <TextInput
          id="subject"
          name="subject"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          name="message"
          onChange={handleChange}
        ></Textarea>
      </FormGroup>
      <Button type="button" onClick={handleSubmit}>
        {t("contact.form.submit")}
      </Button>
    </Form>
  );
}

export default ContactForm;
