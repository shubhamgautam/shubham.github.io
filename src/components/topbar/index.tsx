import * as React from "react";
import "./styles.css";
import NavBar from "./components/navBar";
import Logo from "../../images/unnamed.png";

const topBar = (): React.ReactElement<{}> => {
  return (
    <div className="tp-bar">
      <img className="me-pic" src={Logo} width="60" height="60" />
      <NavBar />
    </div>
  );
};

export default topBar;
