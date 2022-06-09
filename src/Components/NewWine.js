import React from 'react'
import apiUrl from "../apiURL";
import { useState } from 'react'
import {Form, Input, Button} from 'reactstrap'

const NewWine = () => {
const [type, setType] = useState('')
const [variety, setVariety] = useState('')
const [location, setLocation] = useState('')
const [producer, setProducer] = useState('')
const [vintage, setVintage] = useState('')
const [price, setPrice] = useState({Bottle: null, Glass: null})
const [note, setNotes] = useState([])  

  const handleSub = (e) =>{

    console.log(e.target.form.id)

    const uploadData = {
      Price: price,
      Type: type,
      Variety: variety,
      Producer: producer,
      Vintage: vintage,
      Notes: note
    }
    console.log(uploadData)

    const postRequestOp = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(uploadData)
    }

    fetch(`${apiUrl}/wines`, postRequestOp)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(()=> console.log('error'))
  }

  const handleInput = (e) =>{
    e.preventDefault()

    let text = e.target.value 
    let target = e.target.id

    switch(target){
      case "Type":
        setType(text)
        console.log(text)
        break;
      case "Variety":
        setVariety(text)
        break;
      case "Location":
        setLocation(text)
        break;
      case "Producer":
        setProducer(text)
        break;
      case "Vintage":
        setVintage(text)
        break;
      case "Price":
        // setPrice(text)
        let priceArr = text.split(",")
        setPrice({Bottle: priceArr[0], Glass: priceArr[1]})
        break;
      case "Notes":
        let notesArr = text.split(",")
        setNotes(notesArr)
        break;
    }
    // console.log(price)
  }

  return (
    <div>
    <Form>
        <Input id="Type" type='text' placeholder='Wine Type' onChange={handleInput}></Input>
        <Input id="Variety" type='text' placeholder='Wine Varitey' onChange={handleInput}></Input>
        <Input id="Location" type='text' placeholder='Wine Location' onChange={handleInput}></Input>
        <Input id="Producer" type='text' placeholder='Wine Producer' onChange={handleInput}></Input>
        <Input id="Vintage" type='text' placeholder='Wine Vintage' onChange={handleInput}></Input>
        <Input id="Price" type='text' placeholder='Wine Price (Bottle, Glass)' onChange={handleInput}></Input>
        <Input id="Notes" type='text' placeholder='Wine Notes(1, 2, 3, ...)' onChange={handleInput}></Input>
        <Button onClick={handleSub}> Submit </Button>
    </Form>
</div>
  )
}

export default NewWine