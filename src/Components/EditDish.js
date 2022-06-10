import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionItem,
  Button,
  List,
} from "reactstrap";
import apiUrl from "../apiURL";

const EditDish = () => {
  const [dishList, setDishList] = useState([]);
  const [isThisOpen, setIsThisOpen] = useState("");
  const [openEdit, setOpenEdit] = useState("");
  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const [pairings, setPairings] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/dishes`)
      .then((response) => response.json())
      .then((data) => setDishList(data.dishes))
      .catch(() => console.log("Error"));
  }, []);

  const deleteRequestOption = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  const handleExpansion = (e) => {
    console.log(e.target.id);
    if (isThisOpen === "") {
      setIsThisOpen(parseInt(e.target.id));
    } else {
      setIsThisOpen("");
    }
  };
  console.log(dishList);
  const displayList = dishList.map((item, i) => {
    return (
      <li key={item._id}>
        <Accordion open={isThisOpen}>
          <div onClick={handleExpansion} id={i}>
            <h5>Dish Name: {item.Dish}</h5>
            <br />
          </div>
          <AccordionItem>
            <AccordionBody accordionId={i}>
              <list>
                <li>${item.Price}</li>
                <li>{item.Pairings}</li>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </list>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </li>
    );
  });

  return (
    <div>
      <List type="unstyled">{displayList}</List>
    </div>
  );
};

export default EditDish;
