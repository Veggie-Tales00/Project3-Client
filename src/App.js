import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Manager from "./Components/Manager"
import Employee from "./Components/Employee"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownItem } from "reactstrap";
import Links from "./Components/Links";
import Wine from "./Components/Wine";
import { useState, useEffect } from "react";
import Dish from "./Components/Dish";

function App() {
  const [wineType, setWineType] = useState('')

  const callback = (e) =>{
    setWineType(e.target.id)
  }
  return (
    <div className="App">
      <Links />
      <Routes>
        <Route path="/" element={<Home setType={callback}/>} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/wine" element={<Wine type={wineType} />} />
        <Route path="/dish" element={<Dish />}/>
      </Routes>
    </div>
  );
}

export default App;
