import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import apiUrl from "../apiURL";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]);
  const [initialType, setInitialType] = useState("");
  const [isThisOpen, setIsThisOpen] = useState(false);
  const [filterChoice, setFilterChoice] = useState('Filter');
  const [input, setInput] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

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

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    console.log(filterChoice);

    // if filterChoice is 'Filter'
    // set error message to 'Please add filter criteria'

    switch (filterChoice) {
      // check each of these
      // if a filter has been chosen, 
      //  filter by that filter
    }

  };

  // Function to handle the dropdown menu selection clicks
  const handleFilterChoice = (event) => {
    setFilterChoice(event.target.id)
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
            {filterChoice}
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
        <form onSubmit={handleFilterSubmit}>
          <input type="text" id="input" placeholder={filterChoice} onChange={handleChange} value={input} />
          <input type="Submit" />
        </form>
      </div>
      <ul>{wines}</ul>
    </div>
  );
}
