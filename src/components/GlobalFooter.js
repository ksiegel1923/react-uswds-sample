import React from "react";
import { Footer, FooterNav, Address, Logo } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function GlobalFooter() {
  const { t } = useTranslation();
  const pages = [
    <NavLink
      to={t("pathnames.team")}
      key="ourTeam"
      className="usa-footer__primary-link"
    >
      {t("team.title")}
    </NavLink>,
    <NavLink
      to={t("pathnames.contact")}
      key="contactUs"
      className="usa-footer__primary-link"
    >
      {t("contact.title")}
    </NavLink>,
  ];

  return (
    <Footer
      size="slim"
      primary={
        <div className="usa-footer__primary-container grid-row">
          <div className="mobile-lg:grid-col-8">
            <FooterNav size="slim" links={pages} />
          </div>
          <div className="tablet:grid-col-4">
            <Address
              size="slim"
              items={[
                <a key="telephone" href="tel:1-800-555-5555">
                  (800) CALL-GOVT
                </a>,
                <a key="email" href="mailto:info@agency.gov">
                  info@agency.gov
                </a>,
              ]}
            />
          </div>
        </div>
      }
      secondary={
        <Logo
          size="slim"
          image={
            <img
              className="usa-footer__logo-img"
              alt=""
              src={
                "data:image/png;base64,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"
              }
            />
          }
          heading={
            <h2 className="usa-footer__logo-heading">{t("agencyName")}</h2>
          }
        />
      }
    />
  );
}

export default GlobalFooter;
