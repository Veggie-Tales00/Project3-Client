import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Accordion, AccordionItem, AccordionHeader, AccordionBody } from "reactstrap";
import apiUrl from "../apiURL";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]); // all wines
  const [initialType, setInitialType] = useState("");
  const [isThisOpen, setIsThisOpen] = useState(false);
  const [filterChoice, setFilterChoice] = useState('Filter');
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [mapedWine, setMapedWine] = useState([])

  useEffect(() => {
    setInitialType(props.type)
    fetch(`${apiUrl}/wines/`)
      .then((response) => response.json())
      .then((data) => setWineData(data.wines))
  }, []);

  console.log(wineData);

  const wines = wineData.map((item, index) => {
    if (item.Type === initialType) {
      return (
        // <li>{item.Producer}</li>
        <AccordionItem key={index}>
          <AccordionHeader>
            Variety: {item.Variety}  Producer: {item.Producer}
          </AccordionHeader>
          <AccordionBody>
            something in the body
          </AccordionBody>
        </AccordionItem>

      )
    }
  });

  // setMapedWine(wines);

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(input)
    setInput(event.target.value);
  }

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    console.log(`filterChoice:  ${filterChoice}`);
    console.log(`input: ${input}`);

    if (filterChoice === 'Filter') {
      setErrorMessage('Please set filter criteria');
      return 0;
    }
    if (input === '') {
      setErrorMessage('Please enter search criteria');
      return 0;
    }

    switch (filterChoice) {
      case 'Variety':
        console.log(`Variety case chosen`)
        setWineData(wineData.filter(wine => {
          return wine.Variety === input
        }))
        break;
      case 'Producer':
        setWineData(wineData.filter(wine => {
          return wine.Producer === input
        }))
        break;
      case 'Vintage':
        setWineData(wineData.filter(wine => {
          return wine.Vintage === input
        }))
        break;
      // case 'Notes' :
      //   setWineData(wineData.filter( wine => {

      //   }))
      // break;
      // case 'Pairings' :
      //   setWineData(wineData.filter( wine => {

      //   }))
      // break;
    }

    console.log(wineData)

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
      <Accordion
        open="1"
      // toggle={function noRefCheck() { }}
      >
        {wines}
      </ Accordion>
    </div>
  );
}
