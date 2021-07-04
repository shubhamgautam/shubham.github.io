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
    { label: "Resume", id: "resume", url: ""  },
    { label: "Youtube", id: "youtube", url: ""  },
  ];
  getYtVideos();
  return (
    <div className="nav-bar font-mono">
      <ul>
        {itemArr.map((linkItem: itemProp, index: number) => (
          <li key={index}>{linkItem.id === "youtube"? <div className="g-ytsubscribe" data-channelid="UC9IFOtmDZ9bouTV4jd6YWNA" data-layout="default" data-theme="dark" data-count="default"></div> : <a className={linkItem.id === "youtube"? "yt": ""} href={`/#${linkItem.id}`}>{linkItem.label}</a>}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
