import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  esp: { nativeName: "Español" },
};

function LanguageButtons({ page }) {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    history.push(t(`pathnames.${page}`));
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Grid row gap={2}>
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
    </div>
  );
}

export default LanguageButtons;
