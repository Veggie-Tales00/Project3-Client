import React, { useState } from 'react'
import apiURL from '../apiURL'
import { useEffect } from 'react'
import { Accordion, AccordionBody, AccordionItem, List } from 'reactstrap'

export default function EditWine() {
const [wineList, setWineList] = useState([])
const [isThisOpen, setIsThisOpen] = useState('')
    useEffect(()=>{
        fetch(`${apiURL}/wines`)
        .then(response => response.json())
        .then(data => setWineList(data.wines))
        .catch(()=> console.log('Error'))

    }, [])

    const handleExpansion = (e) =>{
        console.log(e.target.id)
        if(isThisOpen === ''){
         setIsThisOpen(parseInt(e.target.id))
        }else{
            setIsThisOpen('')
        }

    }

    const displayList = wineList.map((item, i)=>{
        return(
            <li key={item._id} onClick={handleExpansion} >
                <Accordion open={isThisOpen}>
                    <div id={i}>
                       <h5> Type: {item.Type}</h5> <br />
                        <h5>Producer: {item.Producer} </h5>
                    <AccordionItem >
                        <AccordionBody accordionId={i}>
                        <List type='unstyled'>
                            <li>{item.Variety}</li>
                            <List type='unstyled'>
                                Price:
                                <li>Bottle:{item.Price.Bottle}</li>
                                <li>Glass:{item.Price.Glass}</li>
                            </List>
                        </List>
                        </AccordionBody>
                    </AccordionItem>
                    </div>
                </Accordion>
            </li>
        )
    })
    console.log(wineList)
  return (
    <div>
        <List type="unstyled">
            {displayList}
        </List>
    </div>
  )
}
