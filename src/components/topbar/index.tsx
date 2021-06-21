import * as React from "react";
import "./styles.css";
import NavBar from "./components/navBar";
import Logo from "../../images/unnamed.png";

const topBar = (): React.ReactElement<{}> => {
  return (
    <header className="tp-bar">
      <nav className="nav">
        <div className="app-logo">
          <img className="me-pic" src={Logo} width="60" height="60" />
        </div>
        <div>
          <NavBar />
        </div>
      </nav>
    </header>
  );
};

export default topBar;
