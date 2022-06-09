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
import WhiteWineImg from "../Imgs/WhiteWineResize.jpg";
import SparklingWineImg from "../Imgs/SparklingWine.jpeg";
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
    <div className="home-container">
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
              <CardTitle className="card-title" tag="h3">
                Red Wine
              </CardTitle>
              <CardImg
                className="ImgSize"
                alt="Red Wine Photo"
                src="./images-1.jpg"
                width="100%"
              ></CardImg>
              <Link to="/wine">
                <Button className="go-to" id="Red" onClick={props.setType}>
                  Go to
                </Button>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle className="card-title" tag="h3">
                White
              </CardTitle>
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
              <CardTitle className="card-title" tag="h3">
                Sparkling
              </CardTitle>
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
              <CardTitle className="card-title" tag="h3">
                Dessert / Other
              </CardTitle>
              <CardImg
                className="ImgSize"
                alt="Dessert Wine Photo"
                src="./260965-1200x800-wines_and_desserts.webp"
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
              <CardTitle className="card-title" tag="h3">
                Dishes
              </CardTitle>
              <CardImg
                alt="food"
                src="./download-2.jpg"
                className="ImgSize"
              ></CardImg>
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
