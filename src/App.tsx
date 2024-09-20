import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Map from "./views/map";
import SignIn from "./views/signIn";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
