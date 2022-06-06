import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Manager from "./Components/Manager"
import Employee from "./Components/Employee"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/manager">
          <h2>Manager</h2>
        </Link>
        <Link to="/employee">
          <h2>Employee</h2>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
