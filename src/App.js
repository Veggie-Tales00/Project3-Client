import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Manager from "./Components/Manager"
import Employee from "./Components/Employee"
import ManagerLogin from "./Components/ManagerLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownItem, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import Links from "./Components/Links";
import Wine from "./Components/Wine";
import { useState, useEffect } from "react";
import Dish from "./Components/Dish";
import ManageDish from "./Components/ManageDish";

function App() {
  const [wineType, setWineType] = useState('')
  const [login, setlogin] = useState(false)
  
  //The home component passes the on click event of any button into the call back function below, this callback routes the event into the "Wine Type" state
  //which is then passed into the Wine.js component
  const callback = (e) => {
    setWineType(e.target.id)
  }

  //Toggle the state of the manager login Offcanvas div 
  const toggleLogIn = () => {
    if (login === false) {
      setlogin(true)
    } else {
      setlogin(false)
    }
  }

  const managerSubmit = () =>{
    setlogin(false)
  }

  return (
    <div className="App">

      <Links />

      <Button onClick={toggleLogIn}>Manager LogIn</Button>

      <Offcanvas isOpen={login}>
        <OffcanvasHeader>
          Manager LogIn
        </OffcanvasHeader>
        <OffcanvasBody >
          <ManagerLogin submit={managerSubmit}/>
        </OffcanvasBody>
      </Offcanvas>

      <Routes>
        <Route path="/" element={<Home setType={callback} />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/wine" element={<Wine type={wineType} />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/manager/dish" element={<ManageDish />} />
      </Routes>
    </div>
  );
}

export default App;
