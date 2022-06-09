import "./css/Home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  Col,
  Container,
  Row,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import RedWineImg from "../Imgs/RedWineResized.jpg";
import WhiteWineImg from "../Imgs/WhiteWineResize.jpg";
import SparklingWineImg from "../Imgs/SparklingWine.jpeg";
import DesertWineImg from "../Imgs/DesertWine.jpg";
import ManagerLogin from "./ManagerLogin";

const Home = (props) => {
  const [login, setlogin] = useState(false);

  //Toggle the state of the manager login Offcanvas div
  const toggleLogIn = () => {
    if (login === false) {
      setlogin(true);
    } else {
      setlogin(false);
    }
  };

  const managerSubmit = () => {
    setlogin(false);
  };
  return (
    <div>
      <Offcanvas isOpen={login}>
        <OffcanvasHeader>Manager LogIn</OffcanvasHeader>
        <OffcanvasBody>
          <ManagerLogin submit={managerSubmit} />
        </OffcanvasBody>
      </Offcanvas>
      <div>
        <Button onClick={toggleLogIn} className="login">
          Manager LogIn
        </Button>
      </div>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardTitle tag="h3">Red Wine</CardTitle>
              <CardImg
                className="ImgSize"
                alt="Red Wine Photo"
                src={RedWineImg}
                width="100%"
              ></CardImg>
              <Link to="/wine">
                <Button id="Red" onClick={props.setType}>
                  Go to
                </Button>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle tag="h3">White</CardTitle>
              <CardImg
                className="ImgSize"
                alt="White Wine Photo"
                src={WhiteWineImg}
                width=""
              ></CardImg>
              <Link to="/wine">
                <Button id="White" onClick={props.setType} className="go-to">
                  Go to
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardTitle tag="h3">Sparkling</CardTitle>
              <CardImg
                className="ImgSize"
                alt="Sparkling Wine Photo"
                src={SparklingWineImg}
                width=""
              ></CardImg>
              <Link to="/wine">
                <Button
                  id="Sparkling"
                  onClick={props.setType}
                  className="go-to"
                >
                  Go to
                </Button>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle tag="h3">Dessert / Other</CardTitle>
              <CardImg
                className="ImgSize"
                alt="Dessert Wine Photo"
                src={DesertWineImg}
                width=""
              ></CardImg>
              <Link to="/wine">
                <Button id="Dessert" onClick={props.setType} className="go-to">
                  Go to
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col
            sm={{
              offset: 3,
              size: 6,
            }}
          >
            <Card>
              <CardTitle tag="h3">Dishes</CardTitle>
              <CardImg alt="" src="" width=""></CardImg>
              <Link to="/dish">
                <Button className="go-to">Go to</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
