import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "react-router-scroll-top";

import "./App.scss";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
