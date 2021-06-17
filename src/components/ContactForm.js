import React from "react";
import {
  Form,
  Label,
  TextInput,
  Textarea,
  Button,
  FormGroup,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  return (
    <Form large>
      <FormGroup>
        <Label htmlFor="input-email">{t("contact.form.email")}</Label>
        <TextInput id="input-email" name="input-email" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="input-subject">{t("contact.form.subject")}</Label>
        <TextInput id="input-subject" name="input-subject" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="input-type-message">{t("contact.form.message")}</Label>
        <Textarea id="input-type-message" name="input-type-message"></Textarea>
      </FormGroup>
      <Button>{t("contact.form.submit")}</Button>
    </Form>
  );
}

export default ContactForm;
