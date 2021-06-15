import React from "react";
import {
  Form,
  Label,
  TextInput,
  Textarea,
  Button,
  Grid,
  GridContainer,
} from "@trussworks/react-uswds";

function Contact() {
  return (
    <GridContainer>
      <Grid col>
        <h1>Contact Us</h1>
        <Grid table={{ col: true }}>
          <Form large style={{ textAlign: "initial" }}>
            <Label htmlFor="input-email">Email</Label>
            <TextInput id="input-email" name="input-email" type="text" />
            <Label htmlFor="input-subject">Subject</Label>
            <TextInput id="input-subject" name="input-subject" type="text" />
            <Label htmlFor="input-type-message">Message</Label>
            <Textarea
              id="input-type-message"
              name="input-type-message"
            ></Textarea>
            <Button>Submit</Button>
          </Form>
        </Grid>
      </Grid>
    </GridContainer>
  );
}

export default Contact;
