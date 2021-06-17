import React from "react";
import { Grid, GridContainer, CardGroup } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import BioCard from "../components/BioCard";
import Kara from "../bioPhotos/kara.jpeg";
import Saiful from "../bioPhotos/saiful.jpeg";
import Britney from "../bioPhotos/britney.jpeg";
import Anya from "../bioPhotos/anya.jpeg";
import Michelle from "../bioPhotos/Michelle.jpeg";

import LanguageButtons from "../components/LanguageButtons";

function Team() {
  const team = [
    {
      name: "Kara Siegel",
      photo: Kara,
    },
    {
      name: "Michelle Liu",
      photo: Michelle,
    },
    {
      name: "Anya Dunaif",
      photo: Anya,
    },
    {
      name: "Saiful Islam",
      photo: Saiful,
    },
    {
      name: "Britney Johnson",
      photo: Britney,
    },
  ];

  const { t } = useTranslation();

  return (
    <div>
      <LanguageButtons page={t("team.pathname")} />
      <h1>{t("team.header")}</h1>
      <GridContainer>
        <CardGroup row gap={3}>
          {team.map((person) => {
            return (
              <Grid desktop={{ col: 4 }} tablet={{ col: 6 }}>
                <BioCard name={person.name} photo={person.photo} />
              </Grid>
            );
          })}
        </CardGroup>
      </GridContainer>
    </div>
  );
}

export default Team;
