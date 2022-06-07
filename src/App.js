import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Manager from "./Components/Manager"
import Employee from "./Components/Employee"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownItem } from "reactstrap";
import Links from "./Components/Links";
import Wine from "./Components/Wine";

function App() {
  return (
    <div className="App">
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/Wine" element={<Wine />} />
      </Routes>
    </div>
  );
}

export default App;
