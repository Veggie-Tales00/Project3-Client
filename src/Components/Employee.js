import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Employee = () => {
  return (
    <div>
      <h1>Employee</h1>
      <Link to="/employee/searchwines">
        <Button color="primary">
          <h2>Search Wines</h2>
        </Button>
      </Link>
      <Link to="/employee/searchdish">
        <Button color="primary">
          <h2>Search Dish</h2>
        </Button>
      </Link>
      <Link to="/employee/search/">
        <Button color="primary">
          <h2>Search Wine</h2>
        </Button>
      </Link>
    </div>
  )
}

export default Employee