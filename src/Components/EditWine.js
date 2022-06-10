import React, { useState } from 'react'
import { useEffect } from 'react'
import { Accordion, AccordionBody, AccordionItem, List, Button, Form, Input } from 'reactstrap'
import apiUrl from '../apiURL'

export default function EditWine() {
    const [wineList, setWineList] = useState([])
    const [isThisOpen, setIsThisOpen] = useState('')
    const [openEdit, setOpenEdit] = useState('')
    const [type, setType] = useState('')
    const [producer, setProducer] = useState('')
    const [variety, setVariety] = useState('')
    const [bottlePrice, setBottlePrice] = useState('')
    const [glassPrice, setGlassPrice] = useState('')
    const [uploadData, setUploadData] = useState({})
    const [PutId, setPutId] = useState({})

    useEffect(() => {
        fetch(`${apiUrl}/wines`)
            .then(response => response.json())
            .then(data => setWineList(data.wines))
            .catch(() => console.log('Error'))

    }, [])

    //setting request options for the potential delete request
    const delRequestOp = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }


    const handleExpansion = (e) => {
        // console.log(e.target.innerText)

        //this if statement determins what is being clicked on inside the accordian
        //if it is either the delete or edit button, the accordian will stay open, otherwise it will close
        if (e.target.innerText === "Edit" || e.target.innerText === "Delete") {

            //This is a very ... very long abstraction used to determin the DB object id associated with
            //the curent datapoint you are attempting to preform CRUD on
            let targetObjectID = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id

            if (e.target.innerText === "Delete") {
                let tempCopy = []
                fetch(`${apiUrl}/wines/${targetObjectID}`, delRequestOp)
                    .then(response => response.json())
                    .then(data => tempCopy = data.items)
                    .then(() => setWineList(tempCopy))

            } else if (e.target.innerText === "Edit") {
                setOpenEdit(e.target.id)
                console.log('open')
                setPutId(targetObjectID)
            }

        } else {
            if (isThisOpen === '') {
                setIsThisOpen(parseInt(e.target.id))
                console.log(e.target)
            } else {
                setIsThisOpen('')
            }
        }
    }


    let obj = {}
    const handleInput = (e) => {
        e.preventDefault()

        let text = e.target.value
        let target = e.target.id


        if (target === 'type') {
            setType(text)
        } else if (target === 'producer') {
            setProducer(text)
        } else if (target === 'variety') {
            setVariety(text)
        } else if (target === 'bottle') {
            setBottlePrice(parseInt(text))
        } else if (target === 'glass') {
            setGlassPrice(parseInt(text))
        }
    }
    console.log(type)
    console.log(producer)


    const handleSub = () => {
        if (type !== '') {
            obj.Type = type
        }
        if (producer !== '') {
            obj.Producer = producer
        }
        if (variety !== '') {
            obj.Variety = variety
        }
        if (bottlePrice !== '') {
            obj.Price.Bottle = bottlePrice
        }
        if (glassPrice !== '') {
            obj.Price.Glass = glassPrice
        }

        console.log(obj)




        const postRequestOp = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }

        fetch(`${apiUrl}/wines/${PutId}`, postRequestOp)
            .then(response => response.json())
            .then(data => setWineList(data.wines))
            .then(()=>{
                fetch(`${apiUrl}/wines`)
                .then(response => response.json())
                .then(data => setWineList(data.wines))
                .catch(() => console.log('Error'))
            })
            .catch(() => console.log('error'))


        setOpenEdit('')

    }

    const displayList1 = wineList.map((item, i) => {
        return (
            <li key={item._id} id={item._id} onClick={handleExpansion} >
                <Accordion open={isThisOpen}>
                    <div id={i}>
                        <h5 style={{color:"#f0f0f0"}}> Type: {item.Type}</h5> <br />
                        <h5 style={{color:"#f0f0f0"}}>Producer: {item.Producer} </h5>
                        <AccordionItem >
                            <AccordionBody accordionId={i}>
                                <List type='unstyled'>
                                    <li>Variety: {item.Variety}</li> <br />
                                    Price-
                                    <List >
                                        <li>Bottle:{item.Price.Bottle}</li>
                                        <li>Glass:{item.Price.Glass}</li>
                                        <Button id={item._id} >Edit</Button>
                                        <Button >Delete</Button>
                                    </List>
                                </List>
                            </AccordionBody>
                        </AccordionItem>
                    </div>
                    <Accordion open={openEdit}>
                        <AccordionItem>
                            <AccordionBody accordionId={item._id}>
                                <Form>
                                    <Input id="type" type="text" placeholder={`Type: ${item.Type}`} onChange={handleInput}></Input>
                                    <Input id="producer" type="text" placeholder={`Producer: ${item.Producer}`} onChange={handleInput}></Input>
                                    <Input id="variety" type="text" placeholder={`Variety: ${item.Variety}`} onChange={handleInput}></Input>
                                    <Input id="bottle" type="text" placeholder={`Bottle Price: ${item.Price.Bottle}`} onChange={handleInput}></Input>
                                    <Input id="glass" type="text" placeholder={`Glass Price: ${item.Price.Glass}`} onChange={handleInput}></Input>
                                    <Button id={item._id} onClick={handleSub}>Submit</Button>
                                </Form>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Accordion>
            </li>
        )
    })





    return (
        <div>
            <List type="unstyled">
                {displayList1}
            </List>
        </div>
    )
}
