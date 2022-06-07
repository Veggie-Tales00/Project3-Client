import React, { useEffect, useState } from "react";

export default function Wine(props) {
  const [wineData, setWineData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/wines`)
      .then((response) => response.json())
      .then((data) => setWineData(data.wines));
  }, []);

  console.log(wineData);

  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <input type="Submit" value="Submit" />
      </form>
    </div>
  );
}
