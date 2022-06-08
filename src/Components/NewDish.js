import React from "react";
import { Button, Form, Input } from "reactstrap";

const NewDish = () => {
  return (
    <Form>
      <Input name="Dish" type="text" placeholder="Dish Type"></Input>
      <Input name="Price" type="text" placeholder="Dish Price"></Input>
      <Input name="Pairings" type="text" placeholder="Pairing Choice"></Input>
      <Button> Submit </Button>
    </Form>
  );
};

export default NewDish;
