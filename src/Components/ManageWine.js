import React from 'react'
import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import NewWine from './NewWine'
import EditWine from './EditWine'

export default function ManageWine() {
  const [displayComponent, setDisplayContent] = useState('')
  const [isThisOpen, setIsThisOpen] = useState(false)

// Function to handle the dropdown menu
  const handleDrop = () =>{
    if(isThisOpen === true){
      setIsThisOpen(false)
    }else{
      setIsThisOpen(true)
    }
  }

  //function to handle what component is to be displayed base on the dropdown menu selection
  const handleSelect = (e) =>{
    
    let selected = e.target.id

    if(selected === "new"){    
      setDisplayContent(<NewWine />)
    }else if(selected === "edit"){
      setDisplayContent(<EditWine />)
    }
  }

  return (
    <div>
      <div>
        <h1>Wine's</h1>
      </div>
      <div>
      <Dropdown onClick={handleDrop} isOpen={isThisOpen}>
        <DropdownToggle caret>
          Select
        </DropdownToggle>
        <DropdownMenu onClick={handleSelect}>
          <DropdownItem id="new">
            Enter New Wine
          </DropdownItem>
          <DropdownItem id="edit">
            Edit / Delete Wine
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      <div>
        {displayComponent}
      </div>
    </div>
  )
}
