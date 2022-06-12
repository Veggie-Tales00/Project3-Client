import React, { useEffect, useState } from "react";

<<<<<<< HEAD
export default function Wine(props) {

    
    return (
        <div>
            <h1>{props.type}</h1>
        </div>
    )
=======
function Wine() {
  //const [wineData, setWineData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/wines`)
      .then((response) => response.json())
      .then((data) => console.log(data.wines));
  }, []);
 

  return <div>Wine</div>;
>>>>>>> b4e849c (fetched api from localhost)
}

export default Wine;
