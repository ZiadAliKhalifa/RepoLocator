import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderBar from "./components/Header";
import SearchComponent from "./components/SearchComponent";
import MyRepositories from "./components/MyRepositories";

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-repos">My Repositories</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/my-repos">
              <MyRepositories />
            </Route>
            <Route path="/" exact>
              <SearchComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
