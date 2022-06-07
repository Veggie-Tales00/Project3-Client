import React, { useEffect, useState } from "react";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/wines`)
      .then((response) => response.json())
      .then((data) => setWineData(data.wines));
  }, []);

  console.log(wineData);

  const wines = wineData.map((item) => {
    console.log(item.Producer)
    return <li>{item.Producer}</li>;
  });

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
