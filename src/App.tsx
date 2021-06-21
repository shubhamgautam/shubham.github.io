import * as React from "react";
import BottomBar from "./components/infobar";
import Content from "./sections/content";
import TopBar from "./components/topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SportsBg from "./components/StarsBg";

import "./styles.css";

const App = () => {
  return (
    <div className="App ">
      <div>
        <TopBar />
        <SportsBg>
          <Content />
        </SportsBg>
        <BottomBar />
      </div>
    </div>
  );
};

export default function WithRouter() {
  return (
    <Router>
      <App />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/home?content=youtube" />}
        />
      </Switch>
    </Router>
  );
}
