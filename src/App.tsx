import "./styles.css";

import * as React from "react";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import BottomBar from "./components/infobar";
import ContactMe from "./components/ContactMe";
import Content from "./sections/content";
import Loading from "./scenes/loading";
import SocialMediaLink from "./components/SocilaMediaLink";
import SportsBg from "./components/StarsBg";
import TopBar from "./components/topbar";

const App = () => {
  let width = window.innerWidth;

  return (
    <div className="App ">
      <div>
        <TopBar />
        {
          width> 768? <><SocialMediaLink />
          <ContactMe /></>: []
        }
        
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
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/loading" />}
        />
         <Route
          exact
          path="/home"
          component={App}
        />
        <Route
          exact
          path="/loading"
          component={Loading}
        />
      </Switch>
    </Router>
  );
}
