import React from 'react'
import apiUrl from "../apiURL";
import { useState } from 'react'
import {Form, Input, Button, Alert} from 'reactstrap'

const NewWine = () => {
const [type, setType] = useState('')
const [variety, setVariety] = useState('')
const [location, setLocation] = useState('')
const [producer, setProducer] = useState('')
const [vintage, setVintage] = useState('')
const [price, setPrice] = useState({Bottle: null, Glass: null})
const [note, setNotes] = useState([])  
const [uploadData, setUploadData] = useState({})
const [toggleAlertContent, setAlertContent] = useState(false)

//function to handle the Submit button event
  const handleSubForm = (e) =>{

    console.log(e.target.form.id)

    //building the JSON object that will be used in the postRequestOp object
    setUploadData ({
      Price: price,
      Location: location,
      Type: type,
      Variety: variety,
      Producer: producer,
      Vintage: vintage,
      Notes: note
    })
    console.log(uploadData)

    toggleConfirmContent()
  }

  const sendEntry = () =>{
    //Setting the POST request options to be used in the POST request
    const postRequestOp = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(uploadData)
    }


    //Calling the POST request
    fetch(`${apiUrl}/wines`, postRequestOp)
      .then(response => response.json())
      .then(data => console.log(data))
      .then(()=>{setAlertContent(false)})
      .catch(()=> console.log('error'))


  }

  //Handling the individual input feilds
  const handleInput = (e) =>{
    e.preventDefault()

    let text = e.target.value 
    let target = e.target.id

    //Deciding what state to update depending on where the user is current typing
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

  const toggleConfirmContent = () =>{
      setAlertContent(true)
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
        <Button onClick={handleSubForm}> Submit </Button>
    </Form>
    <div id="Verify">
      <Alert dismissible color="warning" isOpen={toggleAlertContent}>
        Is This Data Correct? <br /><br />
        Wine Type: {type}<br />
        Wine Variety: {variety}<br />
        Wine Vintage: {vintage}<br />
        Wine Location: {location}<br />
        Wine Producer: {producer}<br />
        Bottle Price: {price.Bottle}<br />
        Glass Price: {price.Glass}<br />
        Notes: {note}<br />
        <Button onClick={sendEntry}>Send Data</Button>
      </Alert>
    </div>
</div>
  )
}

export default NewWine