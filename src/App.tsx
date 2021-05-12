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

import "./styles.css";

const App = () => {
  return (
    <div className="App ">
      <TopBar />
      <Content />
      <BottomBar />
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
                      <Redirect to='/home?content=youtube' /> }
              />
            </Switch>
  </Router>
}