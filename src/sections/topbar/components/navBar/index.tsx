import * as React from "react";
import Link from "../Link";
import "./styles.css";
import {getYtVideos} from "../../../../api/YoutubeVidsAPI";

type itemProp = {
  label : string;
  url: string;
}

const navBar = (): React.ReactElement<{}> => {
  const itemArr = [{label:"Youtube", url: ""}, {label: "Medium", url: ""}, {label: "Github", url: ""}];
  getYtVideos();
  return (
    <div className="tp-bar">
      {itemArr.map((linkItem: itemProp) => (
        <Link title={linkItem.label} url={linkItem.url} isActive={false} />
      ))}
    </div>
  );
};

export default navBar;
/*//*/