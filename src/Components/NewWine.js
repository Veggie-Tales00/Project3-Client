import React from 'react'
import {Form, Input, Button} from 'reactstrap'

const NewWine = () => {

  //TBD Post request

  return (
    <div>
    <Form>
        <Input name="Type" type='text' placeholder='Wine Type'></Input>
        <Input name="Variety" type='text' placeholder='Wine Varitey'></Input>
        <Input name="Location" type='text' placeholder='Wine Location'></Input>
        <Input name="Producer" type='text' placeholder='Wine Producer'></Input>
        <Input name="Vintage" type='text' placeholder='Wine Vintage'></Input>
        <Input name="Price" type='text' placeholder='Wine Price (Bottle, Glass)'></Input>
        <Input name="Notes" type='text' placeholder='Wine Notes(1, 2, 3, ...)'></Input>
        <Button> Submit </Button>
    </Form>
</div>
  )
}

export default NewWine