import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, List } from 'reactstrap'

export default function Contributores() {
  return (
    <div>
      <Card style={{color:"#f0f0f0"}}>
        <CardTitle>
          Mike Sabella
        </CardTitle>
        <CardImg alt="Mike Sabella" src="./Mike Suit Profile Pic.jpg"/>
        <CardBody>
          <CardText>
            Contributions-
            <List type='unstyled'>
              <li>Backend CRUD development</li>
              <li>Backend Deployment</li>
              <li>Frontend User UI Functionality</li>
            </List>
            Pashions-
            <List type='unstyled'>
              <li>Cooking</li>
              <li>Gardening</li>
              <li>Harry Dresden books</li>
            </List>
          </CardText>
        </CardBody>
      </Card>
      <Card style={{color:"#f0f0f0"}}>
        <CardTitle>
          Julia Machin
        </CardTitle>
        <CardImg alt="Julia Machin" src="./Julia.jpg"/>
        <CardBody>
          <CardText>
            Contributions-
            <List type='unstyled'>
              <li>Product Reasearch</li>
              <li>DataBase Formating / Entries</li>
              <li>Frontend Styling / Formatting</li>
            </List>
            Pashions-
            <List type='unstyled'>
              <li>Software Development</li>
              <li>Backing</li>
              <li>Standup Comedy</li>
            </List>
          </CardText>


        </CardBody>
      </Card>
      <Card style={{color:"#f0f0f0"}}>
        <CardTitle>
          Anas Ryadi
        </CardTitle>
        <CardImg alt="Anas Ryadi" src="./Anas.jpeg" />
        <CardBody>
          <CardText>
            Contributions-
            <List type='unstyled'>
              <li>Frontend Management UI Functionality (Dishes)</li>
              <li>Backend CRUD ops</li>
              <li>Frontend Initialization / structering</li>
            </List>
            Pashions-
            <List type='unstyled'>
              <li>Software Development</li>
              <li>Cars</li>
              <li>Traveling</li>
            </List>
          </CardText>

        </CardBody>
      </Card>
      <Card style={{color:"#f0f0f0"}}>
        <CardTitle>
          Jacob Wencloff
        </CardTitle>
        <CardImg alt="Jacob Wencloff" src="./thisbetheone.jpg" />
        <CardBody>
          <CardText>
            Contributions-
            <List type='unstyled'>
              <li>Backend CRUD op's </li>
              <li>Backend Connections / Structuring</li>
              <li>Frontend Management UI Functionality (Wines)</li>
            </List>
            Pashions-
            <List type='unstyled'>
              <li>Software Engineering</li>
              <li>Drumming</li>
              <li>Innovation</li>
            </List>

          </CardText>

        </CardBody>
      </Card>
    </div>
  )
}
