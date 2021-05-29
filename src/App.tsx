import * as React from "react";
import BottomBar from "./sections/infobar";
import Content from "./sections/content";
import TopBar from "./sections/topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SportsBg from "./components/StarsBg";

import "./styles.css";

const App = () => {
  return (
    <div className="App ">
      <SportsBg>
        <div>
          <TopBar />
          <Content />
          <BottomBar />
        </div>
      </SportsBg>
    </div>
  );
}

export default function WithRouter() {
  return <Router>
    <App />
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          <Redirect to='/home?content=youtube' />}
      />
    </Switch>
  </Router>
}