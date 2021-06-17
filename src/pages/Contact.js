import React from "react";
import { Grid, GridContainer } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import LanguageButtons from "../components/LanguageButtons";
import ContactForm from "../components/ContactForm";

function Contact() {
  const { t } = useTranslation();

  return (
    <GridContainer>
      <Grid col>
        <h1>{t("contact.title")}</h1>
        <Grid table={{ col: true }}>
          <ContactForm />
        </Grid>
      </Grid>
      <LanguageButtons page={t("contact.pathname")} />
    </GridContainer>
  );
}

export default Contact;
