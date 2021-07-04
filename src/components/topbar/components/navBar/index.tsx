import "./styles.css";

import * as React from "react";

import { getYtVideos } from "../../../../api/YoutubeVidsAPI";

type itemProp = {
  label: string;
  id: string;
  url: string;
};

const NavBar = (): React.ReactElement<{}> => {
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
      <ul>
        {itemArr.map((linkItem: itemProp) => (
          <li><a className={linkItem.id === "youtube"? "yt": ""} href={`/#${linkItem.id}`}>{linkItem.label}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
