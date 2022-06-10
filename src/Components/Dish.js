import React from "react";
import { useEffect, useState } from "react";
import apiUrl from "../apiURL";

export default function Dish(props) {
  const [dish, setDish] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/dishes`)
      .then((response) => response.json())
      .then((data) => setDish(data.dishes))
      .catch((error) => console.log(error));
  }, []);

  const dishes = dish.map((dishItem) => {
    return <li>
      <h5>Dish Name: {dishItem.Dish}</h5><br />
      <h5>Dish Price: {dishItem.Price}</h5><br />
    </li>;
  });

  return (
    <div>
      <h2>Dishes</h2>
      <form>
        <input type="text" placeholder="Dish Name" />
        <input type="submit" value="Search" />
      </form>
      <ul>{dishes}</ul>
    </div>
  );
}
