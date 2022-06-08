import React from 'react'
import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import NewWine from './NewWine'
import EditWine from './EditWine'

export default function ManageWine() {
  const [displayComponent, setDisplayContent] = useState(<NewWine />)
  const [isThisOpen, setIsThisOpen] = useState(false)


  const handleDrop = () =>{
    if(isThisOpen === true){
      setIsThisOpen(false)
    }else{
      setIsThisOpen(true)
    }
  }

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
      <Dropdown onClick={handleDrop} isOpen={isThisOpen}>
        <DropdownToggle caret >
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
