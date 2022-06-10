import React from "react";
import { useEffect, useState } from "react";
import apiUrl from "../apiURL";

export default function Dish(props) {
  const [dishData, setDishData] = useState([]);
  const [input, setInput] = useState('');
  const [reset, setReset] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/dishes`)
      .then((response) => response.json())
      .then((data) => setDishData(data.dishes))
      .catch((error) => console.log(error));
  }, [reset]);

  const dishes = dishData.map((dishItem, index) => {
    return <li key={index}>
      <h5 style={{color:"#f0f0f0"}}>Dish Name: {dishItem.Dish}</h5><br />
      <h5 style={{color:"#f0f0f0"}}>Dish Price: {dishItem.Price}</h5><br />
    </li>;
  });

  const handleDishSubmit = (event) => {
    event.preventDefault();
    setDishData(dishData.filter(dish => dish.Dish === input));
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleReset = () => {
    setReset(!reset);
    setInput('');
  }

  return (
    <div>
      <h2>Dishes</h2>
      <form onSubmit={handleDishSubmit}>
        <input type="text" placeholder="Dish Name" onChange={handleChange} value={input} style={{color:"#f0f0f0"}}/>
        <input type="submit" value="Search" style={{color:"#f0f0f0"}}/>
        <input type="button" value="Reset" onClick={handleReset} style={{color:"#f0f0f0"}}/>
      </form>
      <ul>{dishes}</ul>
    </div>
  );
}
