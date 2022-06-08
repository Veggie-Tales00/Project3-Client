import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Manager = () => {
  return (
    <div>
      <h1>Manager</h1>
      <Link to="/manager/wine">
        <Button color="primary">
          <h2>Manage Wine</h2>
        </Button>
      </Link>
      <Link to="/manager/dish">
        <Button color="primary">
          <h2>Manage Dish</h2>
        </Button>
      </Link>
    </div>
  )
}

export default Manager