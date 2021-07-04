import "./styles.css";

import * as React from "react";

const NavBarMobile = () => {
    const [activeCls, setActiveCls] = React.useState("open");
    const toggleCls = () => {
        const newCls =  activeCls === "open"? "close" : "open";
        setActiveCls(newCls);
    }

    return <button className={`hamburger ${activeCls}`} onClick={toggleCls}>
            <b></b>
            <b></b>
            <b></b>
        </button>
}

export default NavBarMobile;