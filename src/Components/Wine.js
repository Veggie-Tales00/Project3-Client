import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import apiUrl from "../apiURL";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]);
  const [initialType, setInitialType] = useState("");
  const [isThisOpen, setIsThisOpen] = useState(false);
  const [filter, setFilter] = useState('Filter');

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

  const handleFilterSubmit = (event) => {
    return null;
  };

  // Function to handle the dropdown menu selection clicks
  const handleFilterChoice = (event) => {
    setFilter(event.target.id)
  }

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
            {filter}
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem header>
              Filter
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Variety" onClick={handleFilterChoice}>
              Variety
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Producer" onClick={handleFilterChoice}>
              Producer
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Vintage" onClick={handleFilterChoice}>
              Vintage
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Notes" onClick={handleFilterChoice}>
              Notes
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem id="Pairings" onClick={handleFilterChoice}>
              Pairings
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <form onsubmit={handleFilterSubmit}>
          <input type="text" placeholder="Search..." />
          <input type="Submit" />
        </form>
      </div>
      <ul>{wines}</ul>
    </div>
  );
}
