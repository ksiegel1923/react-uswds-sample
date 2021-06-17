import React from "react";
import { Card } from "@trussworks/react-uswds";

function BioCard(props) {
  const { name, photo } = props;
  return (
    <Card containerSize="card-lg">
      <img src={photo} />
      <h3>{name}</h3>
    </Card>
  );
}

export default BioCard;
