import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import apiUrl from "../apiURL";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]);
  const [initialType, setInitialType] = useState("");
  const [isThisOpen, setIsThisOpen] = useState(false)

  useEffect(() => {
    setInitialType(props.type)
    fetch(`${apiUrl}/wines`)
      .then((response) => response.json())
      .then((data) => setWineData(data.wines));
  }, []);

  console.log(wineData);

  const wines = wineData.map((item) => {
    //console.log(initialType)
    if (item.Type === initialType) {
      return (
        <li>{item.Producer}</li>
      )
    }
  });

  // console.log(wines)

  // Function to handle the dropdown menu
  const handleDrop = () => {
    if (isThisOpen === true) {
      setIsThisOpen(false)
    } else {
      setIsThisOpen(true)
    }
  }

  return (
    <div>
      <h1>{props.type}</h1>
      <div className="d-flex justify-content-center p-6">
        <Dropdown onClick={handleDrop} isOpen={isThisOpen}>
          <DropdownToggle caret>
            Filter
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem id="Variety">
              Variety
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Producer">
              Producer
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Vintage">
              Vintage
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Notes">
              Notes
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Pairings">
              Pairings
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <form>
          <input type="text" placeholder="Search..." />
          <input type="Submit" />
        </form>
      </div>
      <ul>{wines}</ul>
    </div>
  );
}
