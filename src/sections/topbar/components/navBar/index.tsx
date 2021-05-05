import * as React from "react";
import Link from "../Link";
import "./styles.css";

const navBar = (): React.ReactElement<{}> => {
  const itemArr = ["Youtube", "Medium", "Quora"];
  return (
    <div className="tp-bar">
      {itemArr.map((val: string) => (
        <Link title={val} isActive={false} />
      ))}
    </div>
  );
};

export default navBar;
