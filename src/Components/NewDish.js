import React from "react";
import { Button, Form, Input, Alert } from "reactstrap";
import { useState } from "react";
import apiUrl from "../apiURL";

const NewDish = () => {
  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const [pairings, setPairings] = useState([""]);
  const [uploadData, setUploadData] = useState({});
  const [toggleAlertContent, setAlertContent] = useState(false);

  const handleSubmitForm = (e) => {
    console.log(e.target.form.id);

    setUploadData({
      Dish: dish,
      Price: price,
      Pairings: pairings,
    });
    console.log(uploadData);

    toggleConfirmContent();
  };

  const sendSubmit = () => {
    // Setting the POST request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uploadData),
    };

    //Calling the POST request
    fetch(`${apiUrl}/dishes`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => {
        setAlertContent(false);
      })
      .catch(() => console.log("error"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = e.target.value;
    let target = e.target.id;

    if (target === "Dish") {
      setDish(text);
    } else if (target === "Price") {
      setPrice(text);
    } else if (target === "Pairings") {
      setPairings(text);
    }
  };

  const toggleConfirmContent = () => {
    setAlertContent(true);
  };

  return (
    <div>
      <Form>
        <Input
          id="Dish"
          type="text"
          placeholder="Dish Type"
          onChange={handleSubmit}
        ></Input>
        <Input
          id="Price"
          type="text"
          placeholder="Dish Price"
          onChange={handleSubmit}
        ></Input>
        <Input
          id="Pairings"
          type="text"
          placeholder="Pairing Choice"
          onChange={handleSubmit}
        ></Input>
        <Button onClick={handleSubmitForm}> Submit </Button>
      </Form>
      <div id="Verify">
        <Alert dismissible color="warning" isOpen={toggleAlertContent}>
          Is This Data Correct? <br />
          <br />
          Dish Name: {dish}
          <br />
          Dish Price: {price}
          <br />
          Pairings: {pairings}
          <br />
          <Button onClick={sendSubmit}>Send Data</Button>
        </Alert>
      </div>
    </div>
  );
};

export default NewDish;
