import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation , Home, App } from "./components";
function Apporg() {
  return (
    <div className="Apporg">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/App" exact component={() => <App />} />
        </Switch>

      </Router>
    </div>
  );
}

export default Apporg;