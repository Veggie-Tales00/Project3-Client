import React, { useEffect, useState } from "react";

export default function Wine(props) {
  //const [wineData, setWineData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/wines`)
      .then((response) => response.json())
      .then((data) => console.log(data.wines));
  }, []);
 
    
    return (
        <div>
            <h1>{props.type}</h1>
        </div>
    )
}

