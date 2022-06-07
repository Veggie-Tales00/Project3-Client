import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Manager = () => {
  return (
    <div>
      <h1>Manager</h1>
      <Link to="/manager/edit">
        <Button color="primary">
          <h2>Add Wine</h2>
        </Button>
      </Link>
      <Link to="/manager/edit">
        <Button color="primary">
          <h2>Delete Wine</h2>
        </Button>
      </Link>
      <Link to="/manager/edit">
        <Button color="primary">
          <h2>Add Dish</h2>
        </Button>
      </Link>
      <Link to="/manager/edit">
        <Button color="primary">
          <h2>Update Wine</h2>
        </Button>
      </Link>
    </div>
  )
}

export default Manager