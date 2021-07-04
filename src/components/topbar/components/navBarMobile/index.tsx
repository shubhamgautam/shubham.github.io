import "./styles.css";

import * as React from "react";

type itemProp = {
    label: string;
    id: string;
    url: string;
  };

const NavBarMobile = () => {
    const [activeCls, setActiveCls] = React.useState("");
    const toggleCls = () => {
        const newCls =  activeCls === "is-active"? "" : "is-active";
        document.body.classList.toggle("blur");
        setActiveCls(newCls);
    }
    

    const itemArr = [
        { label: "About", id: "about", url: "" },
        { label: "Experience", id: "experience", url: ""  },
        { label: "Work", id: "work", url: ""  },
        { label: "Resume", id: "resume", url: ""  },
        { label: "Youtube", id: "youtube", url: ""  },
      ];

    return <div>
            <button onClick={toggleCls} className={`hamburger hamburger--spring ${activeCls}`}>
                <div className="hamburger-box">
                <div className="hamburger-inner"></div>
                </div>
            </button>
            <aside className={`mini-nav-cont ${activeCls}`}>
                <nav>
                    <ul>
                        {itemArr.map((linkItem: itemProp, index: number) => (
                            <li key={index}>{linkItem.id === "youtube"? <div className="g-ytsubscribe" data-channelid="UC9IFOtmDZ9bouTV4jd6YWNA" data-layout="default" data-theme="dark" data-count="default"></div> : <a className={linkItem.id === "youtube"? "yt": "list-item"} href={`/#${linkItem.id}`}>{linkItem.label}</a>}</li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
}

export default NavBarMobile;