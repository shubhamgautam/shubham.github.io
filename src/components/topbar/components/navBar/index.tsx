import "./styles.css";

import * as React from "react";

import { getYtVideos } from "../../../../api/YoutubeVidsAPI";

type itemProp = {
  label: string;
  id: string;
  url: string;
};

const navBar = (): React.ReactElement<{}> => {
  const itemArr = [
    { label: "About", id: "about", url: "" },
    { label: "Experience", id: "experience", url: ""  },
    { label: "Work", id: "work", url: ""  },
    { label: "Contact", id: "contact", url: ""  },
    { label: "Youtube", id: "youtube", url: ""  },
  ];
  getYtVideos();
  return (
    <div className="nav-bar font-mono">
      {itemArr.map((linkItem: itemProp) => (
        <a className={linkItem.id === "youtube"? "yt": ""} href={`/#${linkItem.id}`}>{linkItem.label}</a>
      ))}
    </div>
  );
};

export default navBar;
/*//*/
