import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, GridContainer } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

//Question:
//Upon first load when switching from English to Spanish the pathname fails to refresh
//But it works in every other instance

const lngs = {
  en: { nativeName: "English" },
  esp: { nativeName: "Español" },
};

function LanguageButtons({ page }) {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  //Changes the page's language as well as the language of the pathname
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    history.push(t(`pathnames.${page}`));
  };

  return (
    <GridContainer className="language-buttons">
      <Grid row gap={2} className="language-buttons__grid">
        {Object.keys(lngs).map((lng) => (
          <Button
            unstyled
            style={{ fontWeight: i18n.language === lng ? "bold" : "normal" }}
            key={lng}
            type="button"
            onClick={() => changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </Grid>
    </GridContainer>
  );
}

export default LanguageButtons;
