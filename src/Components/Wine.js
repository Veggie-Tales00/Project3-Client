import React, { useEffect, useState } from "react";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]);
  const [initialType, setInitialType] = useState("");


  useEffect(() => {
    setInitialType(props.type)
    fetch(`http://localhost:8080/wines`)
      .then((response) => response.json())
      .then((data) => setWineData(data.wines));
  }, []);

  console.log(wineData);

  const wines = wineData.map((item) => {
    //console.log(initialType)
    if(item.Type === initialType) {
      return(
        <li>{item.Producer}</li>
      )
    }
  });
console.log(wines)
  return (
    <div>
      <h1>{props.type}</h1>
      <form>
        <input type="text" placeholder="Search..." />
        <input type="Submit" />
      </form>
      <ul>{wines}</ul>
    </div>
  );
}
