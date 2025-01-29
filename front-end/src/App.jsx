import {
  BrowserRouter as Router} from "react-router-dom";
import Navbar from './Components/Navbar';
import './App.css'
import AnimateRoute from "./Components/AnimateRoute";

function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
        <div>
          <AnimateRoute />
        </div>
      </Router>
      </div>
    </>
  );
}

export default App;
