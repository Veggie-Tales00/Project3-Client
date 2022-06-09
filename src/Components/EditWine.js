import React, { useState } from "react";
import apiURL from "../apiURL";
import { useEffect } from "react";
import { Accordion, AccordionBody, AccordionItem, List } from "reactstrap";

export default function EditWine() {
  const [wineList, setWineList] = useState([]);
  const [isThisOpen, setIsThisOpen] = useState("");
  useEffect(() => {
    fetch(`${apiURL}/wines`)
      .then((response) => response.json())
      .then((data) => setWineList(data.wines))
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

  const displayList = wineList.map((item, i) => {
    return (
      <li key={item._id}>
        <Accordion open={isThisOpen}>
          <div onClick={handleExpansion} id={i}>
            Type: {item.Type} <br />
            Producer: {item.Producer}
          </div>
          <AccordionItem>
            <AccordionBody accordionId={i}>
              <ul>
                <li>{item.Variety}</li>
                <ul>
                  Price:
                  <li>Bottle:{item.Price.Bottle}</li>
                  <li>Glass:{item.Price.Glass}</li>
                </ul>
              </ul>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </li>
    );
  });
  console.log(wineList);
  return (
    <div>
      EditWine
      <List type="unstyled">{displayList}</List>
    </div>
  );
}
