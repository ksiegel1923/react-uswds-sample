import React from "react";
import { Card, CardBody, CardMedia } from "@trussworks/react-uswds";

function BioCard(props) {
  const { name, photo, role } = props;
  return (
    <Card containerSize="card-lg">
      <CardMedia>
        <img src={photo} alt={`${name}'s headshot`} />
      </CardMedia>
      <CardBody>
        <h2>{name}</h2>
        <h5>{role}</h5>
      </CardBody>
    </Card>
  );
}

export default BioCard;
