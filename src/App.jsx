import "./home.scss";
import "./App.scss";

import Navigation from "./Components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Home />
      </Router>
    </>
  );
}

export default App;
