import React, { useState } from 'react'
import apiURL from '../apiURL'
import { useEffect } from 'react'
import { List } from 'reactstrap'

export default function EditWine() {
const [wineList, setWineList] = useState([])

    useEffect(()=>{
        fetch(`${apiURL}/wines`)
        .then(response => response.json())
        .then(data => setWineList(data.wines))
        .catch(()=> console.log('Error'))

    }, [])

    const displayList = wineList.map((item)=>{
        return(
            <li key={item._id}>
                <div>
                    Type: {item.Type}
                </div>
                <h3>{item.Producer}</h3>
                <h4>{item.Variety}</h4>
            </li>
        )
    })
    console.log(wineList)
  return (
    <div>
        EditWine
        <List type="unstyled">
            {displayList}
        </List>
    </div>
  )
}
