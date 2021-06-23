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
import SocialMediaLink from "./components/SocilaMediaLink";
import SportsBg from "./components/StarsBg";
import TopBar from "./components/topbar";

const App = () => {
  return (
    <div className="App ">
      <div>
        <TopBar />
        <SocialMediaLink />
        <ContactMe />
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
