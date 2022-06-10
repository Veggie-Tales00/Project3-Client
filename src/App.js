import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Manager from "./Components/Manager";
import Employee from "./Components/Employee";
import ManagerLogin from "./Components/ManagerLogin";
import ManageWine from "./Components/ManageWine";
import "bootstrap/dist/css/bootstrap.min.css";
import Links from "./Components/Links";
import Wine from "./Components/Wine";
import { useState, useEffect } from "react";
import Dish from "./Components/Dish";
import ManageDish from "./Components/ManageDish";
import Credits from "./Components/Credits";

function App() {
  const [wineType, setWineType] = useState("");

  //The home component passes the on click event of any button into the call back function below, this callback routes the event into the "Wine Type" state
  //which is then passed into the Wine.js component
  const callback = (e) => {
    setWineType(e.target.id);
  };

  return (
    <div className="App">
      <Links />

      <Routes>
        <Route path="/credits" element={<Credits />} />
        <Route path="/" element={<Home setType={callback} />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/managerWine" element={<ManageWine />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/wine" element={<Wine type={wineType} />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/manager/dish" element={<ManageDish />} />
      </Routes>
    </div>
  );
}

export default App;
