import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Manager from "./Components/Manager"
import Employee from "./Components/Employee"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownItem } from "reactstrap";
import Links from "./Components/Links";
import Wine from "./Components/Wine";
import { useState } from "react";

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
        <Route path="/Wine" element={<Wine type={wineType} />} />
      </Routes>
    </div>
  );
}

export default App;
