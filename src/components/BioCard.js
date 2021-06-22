import React from "react";
import { Card, CardBody, CardMedia } from "@trussworks/react-uswds";

function BioCard(props) {
  const { name, photo, role } = props;
  return (
    <Card
      containerSize="card-lg"
      gridLayout={{ desktop: { col: 4 }, tablet: { col: 6 } }}
    >
      <CardMedia>
        <img src={photo} alt={`${name}'s headshot`} />
      </CardMedia>
      <CardBody>
        <h2>{name}</h2>
        <p>{role}</p>
      </CardBody>
    </Card>
  );
}

export default BioCard;
