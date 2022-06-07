import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardImg, CardTitle, Input } from "reactstrap";

const Home = () => {
  return (
    <div>
      <h1>Som-base</h1>
      <Card>
        <CardTitle tag="h3">Red Wine</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to='/wine'>
          <Button>Go to</Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">White</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to='/wine'>
          <Button>Go to</Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">Sparkling</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to='/wine'>
          <Button>Go to</Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">Desert / Other</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Link to='/wine'>
          <Button>Go to</Button>
        </Link>
      </Card>

      <Card>
        <CardTitle tag="h3">Dishes</CardTitle>
        <CardImg alt="" src="" width=""></CardImg>
        <Button>Go to</Button>
      </Card>
    </div>
  );
};

export default Home;
