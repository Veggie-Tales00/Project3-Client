import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Accordion, AccordionItem, AccordionBody, List, Button } from "reactstrap";
import apiUrl from "../apiURL";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]); // all wines
  const [initialType, setInitialType] = useState("");
  const [isThisOpen, setIsThisOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterChoice, setFilterChoice] = useState('Filter');
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    setInitialType(props.type)
    fetch(`${apiUrl}/wines/`)
      .then((response) => response.json())
      .then((data) => setWineData(data.wines))
  }, []);

  const handleExpansion = (event) => {
    console.log(event.target.id);
    if (isThisOpen === "") {
      setIsThisOpen(parseInt(event.target.id));
    } else {
      setIsThisOpen("");
    }
  };

  const wines = wineData.map((item, index) => {
    return (
      <li key={item._id}>
        <Accordion open={isThisOpen}>
          <div onClick={handleExpansion} id={index}>
            <h5 > Type: {item.Type}</h5> <br />
            <h5 >Producer: {item.Producer} </h5>
          </div>
          <AccordionItem>
            <AccordionBody accordionId={index}>
              <List type='unstyled'>
                <li>Variety: {item.Variety}</li> <br />
                Price-
                <List >
                  <li>Bottle:{item.Price.Bottle}</li>
                  <li>Glass:{item.Price.Glass}</li>
                </List>
              </List>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </li>
    );
  });


  // ----------------------------------------------------------------

  // useEffect(() => {
  //   setInitialType(props.type)
  //   fetch(`${apiUrl}/wines/`)
  //     .then((response) => response.json())
  //     .then((data) => setWineData(data.wines))
  // }, []);

  // console.log(wineData);

  // const handleAccordianClick = (event) => {
  //   console.log(`event: ${event}`)
  //   console.log(`event.target: ${event.target}`)
  //   console.log(`event.target.id: ${parseInt(event.target.id)}`)
  //   if (isOpen === '') {
  //     setIsOpen(parseInt(event.target.id))
  //     console.log(isOpen)
  //   } else {
  //     setIsOpen('')
  //   }
  // }

  // const wines = wineData.map((item, index) => {
  //   console.log(item.Type)
  //   if (item.Type === initialType) {
  //     return (
  //       <li key={index} >
  //         <Accordion
  //           open={isOpen} // set to accordian body id
  //           id={index}
  //         >
  //           <div onClick={handleAccordianClick}>
  //             <AccordionItem >
  // <h5 > Type: {item.Type}</h5> <br />
  // <h5 >Producer: {item.Producer} </h5>
  //               <AccordionBody accordionId={index}>
  //                 <List type='unstyled'>
  //                   <li>Variety: {item.Variety}</li> <br />
  //                   Price-
  //                   <List >
  //                     <li>Bottle:{item.Price.Bottle}</li>
  //                     <li>Glass:{item.Price.Glass}</li>
  //                     <Button >Edit</Button>
  //                     <Button >Delete</Button>
  //                   </List>
  //                 </List>
  //               </AccordionBody>
  //             </AccordionItem>
  //           </div>
  //         </ Accordion>
  //       </li>
  //     )
  //   }
  // });

  // const wines = wineData.map((item, i) => {
  //   return (
  //     <li key={item._id}>
  //       <Accordion open={isOpen}>
  //         <div onClick={handleAccordianClick} id={i}>
  //           Type: {item.Dish}
  //         </div>
  //         <AccordionItem>
  //           <AccordionBody accordionId={i}>
  //             <list>
  //               <li>{item.Price}</li>
  //               <li>{item.Pairings}</li>
  //               <Button>Edit</Button>
  //               <Button>Delete</Button>
  //             </list>
  //           </AccordionBody>
  //         </AccordionItem>
  //       </Accordion>
  //     </li>
  //   );
  // });


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
          return wine.Variety.toLowerCase() === input.toLowerCase();
        }))
        break;
      case 'Producer':
        setWineData(wineData.filter(wine => {
          return wine.Producer.toLowerCase() === input.toLowerCase();
        }))
        break;
      case 'Vintage':
        setWineData(wineData.filter(wine => {
          return wine.Vintage === input
        }))
        break;
      case 'Notes':
        setWineData(wineData.filter(wine => {

        }))
        break;
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
    handleDrop()
  }

  // Function to handle the dropdown menu
  const handleDrop = () => {
    setIsDropdownOpen(!isDropdownOpen)
    if (isThisOpen === true) {
      // setInput('Filter')
    }
  }

  return (
    <div>
      <h1>{props.type}</h1>
      <div className="d-flex justify-content-center p-6">
        <Dropdown onClick={handleDrop} isOpen={isDropdownOpen}>
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
      <ul>
        {wines}
      </ul>
    </div>
  );
}