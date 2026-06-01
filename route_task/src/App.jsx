import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Mobile from "./components/Mobile";
import Fashion from "./components/Fashion";
import Electronics from "./components/Electronics";

function App() {
  return (
    
      <div className="container">
        <h1>welcome to my routing app</h1>

        <nav>
          <NavLink to="/mobiles">Mobiles</NavLink>{" "}
          <NavLink to="/fashion">Fashion</NavLink>{" "}
          <NavLink to="/electronics">Electronics</NavLink>
        </nav> 

        <Routes>
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </div>
  
  );
}

export default App;
