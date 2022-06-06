import "./App.css";
import { Link } from "react-router-dom";


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
      
    </div>
  );
}

export default App;
