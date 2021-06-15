import React from "react";
import { GridContainer, Card, CardGroup } from "@trussworks/react-uswds";

function BioCard(props) {
  const { name, photo } = props;
  return (
    <CardGroup>
      <Card containerSize="card-lg">
        <img src={photo} />
        <h3>{name}</h3>
      </Card>
    </CardGroup>
  );
}

export default BioCard;
