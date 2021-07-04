import "./styles.css";

import * as React from "react";

import Logo from "../../images/unnamed.png";
import NavBar from "./components/navBar";
import NavBarMobile from "./components/navBarMobile";

const topBar = (): React.ReactElement<{}> => {
  const innerWidth = window.innerWidth;

  const getNavbar = (): React.ReactElement<{}> => {

    const mobileTpl = <div><NavBarMobile /></div>;
    const desktopTpl = <div>
    <NavBar />
  </div>;
    return innerWidth>780?desktopTpl: mobileTpl;
  }

  return (
    <header className="tp-bar">
      <nav className="nav">
        <div className="app-logo">
          <img alt="" className="me-pic" src={Logo} width="50" height="50" />
        </div>
        {
          getNavbar()
        }
        
      </nav>
    </header>
  );
};

export default topBar;
