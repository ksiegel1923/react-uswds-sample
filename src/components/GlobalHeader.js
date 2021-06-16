import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Header,
  NavMenuButton,
  Title,
  GovBanner,
  PrimaryNav,
  Button,
  Grid,
} from "@trussworks/react-uswds";
import "./GlobalHeader.scss";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  esp: { nativeName: "Español" },
};

function GlobalHeader() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  let teamPathname = t("team.pathname");
  let contactPathname = t("contact.pathname");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    //This commented out section is when I was trying to figure out how to
    //adjust the pathname based on the language (will come back to this):

    // teamPathname = t("team.pathname");
    // contactPathname = t("contact.pathname");
    // // browserHistory.replace(t(`pathnames.${window.location.pathname}`));
    // // window.location.replace(t(`pathnames.${window.location.pathname}`));
    // window.location.href = t(`pathnames.${window.location.pathname}`);
  };

  const pages = [
    // <Link to={teamPathname + "/" + i18n.language} key="ourTeam">
    //   {t("team.title")}
    // </Link>,
    // <Link to={contactPathname + "/" + i18n.language} key="contactUs">
    //   {t("contact.title")}
    // </Link>,
    <NavLink to="/ourTeam" key="ourTeam">
      {t("team.title")}
    </NavLink>,
    <NavLink to="/contactUs" key="contactUs">
      {t("contact.title")}
    </NavLink>,
  ];

  return (
    <div>
      <GovBanner language={i18n.language === "en" ? "english" : "spanish"} />
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
      <div className={`usa-overlay ${expanded ? "is-visible" : ""}`}></div>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>{t("header")}</Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </div>
          <PrimaryNav
            items={pages}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
          ></PrimaryNav>
        </div>
      </Header>
    </div>
  );
}

export default GlobalHeader;
