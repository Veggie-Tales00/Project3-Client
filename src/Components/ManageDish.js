import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import NewDish from "./NewDish";
import EditDish from "./EditDish"


const ManageDish = () => {
    const [displayComponent, setDisplayContent] = useState("")
    const [isThisOpen, setIsThisOpen] = useState(false)

const handleDrop = () => {
    if(isThisOpen === true){
        setIsThisOpen(false)
    }else{
        setIsThisOpen(true)
    }
}

const handleSelect = (e) =>{
    let selected = e.target.id

    if(selected === "new"){
        setDisplayContent(<NewDish />)
    }else if(selected === "edit"){
        setDisplayContent(<EditDish />)
    }
}

  return (
    <div>
      <div>
        <h1>Dishes</h1>
      </div>
      <div>
      <Dropdown onClick={handleDrop} isOpen={isThisOpen}>
        <DropdownToggle caret>Select</DropdownToggle>
        <DropdownMenu onClick={handleSelect}>
            <DropdownItem id="new">
                Enter New Dish
            </DropdownItem>
            <DropdownItem id="edit">
                Edit / Delete Dish
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
        <div>
            {displayComponent}
        </div>
    </div>
  );
};

export default ManageDish;
