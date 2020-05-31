import React from "react";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import TransitionSwitch from "./components/TransitionSwitch";

import "./styles/index.scss";
function App() {
  return (
    <Router>
      <TransitionSwitch routes={routes} />
    </Router>
  );
}

export default App;
