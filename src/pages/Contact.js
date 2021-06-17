import React from "react";
import {
  Form,
  Label,
  TextInput,
  Textarea,
  Button,
  Grid,
  GridContainer,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import LanguageButtons from "../components/LanguageButtons";

function Contact() {
  const { t } = useTranslation();

  return (
    <GridContainer>
      <LanguageButtons page={t("contact.pathname")} />
      <Grid col>
        <h1>{t("contact.title")}</h1>
        <Grid table={{ col: true }}>
          <Form large style={{ textAlign: "initial" }}>
            <Label htmlFor="input-email">{t("contact.form.email")}</Label>
            <TextInput id="input-email" name="input-email" type="text" />
            <Label htmlFor="input-subject">{t("contact.form.subject")}</Label>
            <TextInput id="input-subject" name="input-subject" type="text" />
            <Label htmlFor="input-type-message">
              {t("contact.form.message")}
            </Label>
            <Textarea
              id="input-type-message"
              name="input-type-message"
            ></Textarea>
            <Button>{t("contact.form.submit")}</Button>
          </Form>
        </Grid>
      </Grid>
    </GridContainer>
  );
}

export default Contact;
