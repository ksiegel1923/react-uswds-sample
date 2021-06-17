import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Header,
  NavMenuButton,
  Title,
  GovBanner,
  PrimaryNav,
} from "@trussworks/react-uswds";
import "./GlobalHeader.scss";
import { useTranslation } from "react-i18next";

function GlobalHeader() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  const pages = [
    <NavLink to={t("team.pathname")} key="ourTeam">
      {t("team.title")}
    </NavLink>,
    <NavLink to={t("contact.pathname")} key="contactUs">
      {t("contact.title")}
    </NavLink>,
  ];

  return (
    <div>
      <GovBanner language={i18n.language === "en" ? "english" : "spanish"} />
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
