import React, { useEffect, useState } from "react";

function Wine() {
  //const [wineData, setWineData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/wines`)
      .then((response) => response.json())
      .then((data) => console.log(data.wines));
  }, []);
 

  return <div>Wine</div>;
}

export default Wine;
