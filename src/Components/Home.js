import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardImg, CardTitle, Input } from "reactstrap";

const Home = (props) => {
  return (
    <div>
      <h1>Som-base</h1>
      <Card>
        <CardTitle tag="h3">Red Wine</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to="/wine">
          <Button id="Red" onClick={props.setType}>
            Go to
          </Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">White</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to="/wine">
          <Button id="White" onClick={props.setType}>
            Go to
          </Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">Sparkling</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to="/wine">
          <Button id="Sparkling" onClick={props.setType}>
            Go to
          </Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">Desert / Other</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to="/wine">
          <Button id="Desert" onClick={props.setType}>
            Go to
          </Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">Dishes</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to="/dish">
          <Button>Go to</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;
