import React from "react";
import { Grid, GridContainer } from "@trussworks/react-uswds";

import BioCard from "../components/BioCard";
import Kara from "../bioPhotos/kara.jpeg";

function Team() {
  const team = [
    {
      name: "Kara Siegel",
      photo: Kara,
    },
    {
      name: "Michelle Liu",
      photo: Kara,
    },
    {
      name: "Anya Dunaif",
      photo: Kara,
    },
    {
      name: "Saiful Islam",
      photo: Kara,
    },
    {
      name: "Britney Johnson",
      photo: Kara,
    },
  ];

  return (
    <div>
      <h1>Meet Our Team</h1>
      <GridContainer>
        <Grid row gap={6}>
          {team.map((person) => {
            return (
              <Grid desktop={{ col: 4 }} tablet={{ col: 6 }}>
                <BioCard name={person.name} photo={person.photo} />
              </Grid>
            );
          })}
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Team;
