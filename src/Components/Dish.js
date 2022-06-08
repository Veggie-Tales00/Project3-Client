import React from "react";
import { useEffect, useState } from "react";

export default function Dish(props) {
  const [dish, setDish] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/dishes`)
      .then((response) => response.json())
      .then((data) => setDish(data.dishes))
      .catch((error) => console.log(error));
  }, []);

  const dishes = dish.map((dishItem) => {
    return <li>{dishItem.Dish}</li>;
  });

  return (
    <div>
      <h1>dishes</h1>
      <ul>{dishes}</ul>
    </div>
  );
}
