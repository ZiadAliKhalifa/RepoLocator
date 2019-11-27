import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderBar from "./components/Header";
import SearchComponent from "./components/SearchComponent";
import MyRepositories from "./components/MyRepositories";

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
        <Switch>
          <Route path="/my-repos">
            <MyRepositories />
          </Route>
          <Route path="/" exact>
            <SearchComponent />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
