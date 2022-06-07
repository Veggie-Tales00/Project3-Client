import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardImg, CardTitle, Col, Container, Row } from "reactstrap";

const Home = (props) => {
  return (
    <div>
      <h1>Som-base</h1>
      <Container>
        <Row>
          <Col>
            <Card >
              <CardTitle tag="h3">Red Wine</CardTitle>
              <CardImg alt="Red Wine Photo" src="" width="100%" ></CardImg>
              <Link to='/wine'>
                <Button id="Red" onClick={props.setType}>Go to</Button>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle tag="h3">White</CardTitle>
              <CardImg alt="White Wine Photo" src="" width=""></CardImg>
              <Link to='/wine'>
                <Button id="White" onClick={props.setType}>Go to</Button>
              </Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardTitle tag="h3">Sparkling</CardTitle>
              <CardImg alt="Sparkling Wine Photo" src=""width=""></CardImg>
              <Link to='/wine'>
                <Button id="Sparkling" onClick={props.setType}>Go to</Button>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle tag="h3">Desert / Other</CardTitle>
              <CardImg alt="Desert Wine Photo" src="" width=""></CardImg>
              <Link to='/wine'>
                <Button id="Desert" onClick={props.setType}>Go to</Button>
              </Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={{
            offset: 3,
            size: 6
          }}>
            <Card>
              <CardTitle tag="h3">Dishes</CardTitle>
              <CardImg alt="" src="" width=""></CardImg>
              <Link to="/dish">
              <Button >Go to</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
