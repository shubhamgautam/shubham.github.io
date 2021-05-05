import * as React from "react";
import "./styles.css";
import NavBar from "./components/navBar";

const topBar = (): React.ReactElement<{}> => {
  return (
    <div className="tp-bar">
      <div>logo</div>
      <NavBar />
    </div>
  );
};

export default topBar;
