import * as React from "react";
import "./styles.css";

const bottomBar = (): React.ReactElement<{}> => {
  return (
    <div className="info-bar ">
      <div>information</div>
      <div>copyright</div>
    </div>
  );
};

export default bottomBar;
