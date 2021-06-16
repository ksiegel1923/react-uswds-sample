import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Header,
  NavMenuButton,
  Title,
  GovBanner,
  PrimaryNav,
} from "@trussworks/react-uswds";
// import "./GlobalHeader.scss";

function GlobalHeader() {
  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  const pages = [
    <NavLink to="/ourTeam" key="ourTeam">
      Our Team
    </NavLink>,
    <NavLink to="/contactUs" key="contactUs">
      Contact Us
    </NavLink>,
  ];

  return (
    <div>
      <GovBanner />
      <div className={`usa-overlay ${expanded ? "is-visible" : ""}`}></div>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>MOCTO CIC Interns</Title>
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
