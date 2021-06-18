import React from "react";
import { Grid, GridContainer, CardGroup } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import BioCard from "../components/BioCard";
import LanguageButtons from "../components/LanguageButtons";

function Team() {
  const { t } = useTranslation();
  const teamMembers = t("teamMembers", { returnObjects: true });

  return (
    <div>
      <h1>{t("team.header")}</h1>
      <GridContainer>
        <CardGroup row gap={3}>
          {teamMembers.map((person) => {
            return (
              <Grid desktop={{ col: 4 }} tablet={{ col: 6 }}>
                <BioCard
                  name={person.name}
                  photo={person.photo}
                  role={person.role}
                />
              </Grid>
            );
          })}
        </CardGroup>
        <LanguageButtons page={t("team.pathname")} />
      </GridContainer>
    </div>
  );
}

export default Team;
