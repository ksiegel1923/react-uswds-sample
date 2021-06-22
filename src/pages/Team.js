import React from "react";
import { GridContainer, CardGroup } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import BioCard from "../components/BioCard";
import LanguageButtons from "../components/LanguageButtons";

function Team() {
  const { t } = useTranslation();
  const teamMembers = t("teamMembers", { returnObjects: true });

  return (
    <GridContainer>
      <LanguageButtons page={"team"} />
      <h1>{t("team.header")}</h1>
      <CardGroup row gap={3}>
        {teamMembers.map((person) => {
          return (
            <BioCard
              name={person.name}
              photo={person.photo}
              role={person.role}
            />
          );
        })}
      </CardGroup>
    </GridContainer>
  );
}

export default Team;
