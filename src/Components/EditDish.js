
import React, { useEffect, useState } from "react";
import { Accordion, AccordionBody, AccordionItem, List } from "reactstrap";
import apiUrl from "../apiURL";

const EditDish = () => {
  const [dishList, setDishList] = useState([]);
  const [isThisOpen, setIsThisOpen] = useState("");
  useEffect(() => {
    fetch(`${apiUrl}/dishes`)
      .then((response) => response.json())
      .then((data) => setDishList(data.dishes))
      .catch(() => console.log("Error"));
  }, []);

  const handleExpansion = (e) => {
    console.log(e.target.id);
    if (isThisOpen === "") {
      setIsThisOpen(parseInt(e.target.id));
    } else {
      setIsThisOpen("");
    }
  };
console.log(dishList)
  const displayList = dishList.map((item, i) => {
    return (
      <li key={item._id}>
        <Accordion open={isThisOpen}>
          <div onClick={handleExpansion} id={i}>
            Type: {item.Dish}
          </div>
          <AccordionItem>
            <AccordionBody accordionId={i}>
              <ul>
                <li>{item.Price}</li>
                <li>{item.Pairings}</li>
              </ul>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </li>
    );
  });

  return (
    <div>
      EditDish
      <List type="unstyled">{displayList}</List>
    </div>
  );
};

export default EditDish;
