import React, { useState } from 'react'
import { useEffect } from 'react'
import { Accordion, AccordionBody, AccordionItem, List, Button } from 'reactstrap'
import apiUrl from '../apiURL'

export default function EditWine() {
    const [wineList, setWineList] = useState([])
    const [isThisOpen, setIsThisOpen] = useState('')

    useEffect(() => {
        fetch(`${apiUrl}/wines`)
            .then(response => response.json())
            .then(data => setWineList(data.wines))
            .catch(() => console.log('Error'))

    }, [])

    const delRequestOp = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      }

    const handleExpansion = (e) => {
        // console.log(e)
        if(e.target.innerText === "Edit" || e.target.innerText === "Delete"){

          let targetObjectID =  e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id

            if(e.target.innerText === "Delete"){
                let tempCopy = [...wineList]
                fetch(`${apiUrl}/wines/${targetObjectID}`, delRequestOp)
                .then(response => response.json())
                .then(data => tempCopy.push(data))
                .then(()=> setWineList(tempCopy))
                console.log(tempCopy)
            }
        }else{
            if (isThisOpen === '') {
                setIsThisOpen(parseInt(e.target.id))
            } else {
                setIsThisOpen('')
            }
        }


    }
  };

    const displayList = wineList.map((item, i) => {
        return (
            <li key={item._id} id={item._id} onClick={handleExpansion} >
                <Accordion open={isThisOpen}>
                    <div id={i}>
                        <h5> Type: {item.Type}</h5> <br />
                        <h5>Producer: {item.Producer} </h5>
                        <AccordionItem >
                            <AccordionBody accordionId={i}>
                                <List type='unstyled'>
                                    <li>Variety: {item.Variety}</li> <br />
                                    Price-
                                    <List >
                                        <li>Bottle:{item.Price.Bottle}</li>
                                        <li>Glass:{item.Price.Glass}</li>
                                        <Button >Edit</Button>
                                        <Button >Delete</Button>
                                    </List>
                                </List>
                            </AccordionBody>
                        </AccordionItem>
                    </div>
                </Accordion>
            </li>
        )
    })
<<<<<<< HEAD
    // console.log(wineList)
    return (
        <div>
            <List type="unstyled">
                {displayList}
            </List>
        </div>
    )
=======
    console.log(wineList)
  return (
    <div>
        <List type="unstyled">
            {displayList}
        </List>
    </div>
  );
>>>>>>> 387b265e2d086131a262b753017b436ee6c5d021
}
