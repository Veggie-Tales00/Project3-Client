import React from "react";
import { useEffect, useState } from "react";
import apiUrl from "../apiURL";

export default function Dish(props) {
  const [dish, setDish] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/wines`)
      .then((response) => response.json())
      .then((data) => setDish(data.dishes))
      .catch((error) => console.log(error));
  }, []);

  const dishes = dish.map((dishItem) => {
    return <li>{dishItem.Dish}</li>;
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
