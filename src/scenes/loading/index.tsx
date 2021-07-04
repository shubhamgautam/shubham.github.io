import "./styles.css";

import React from "react";
import { useHistory } from "react-router-dom";

const Loading =(): JSX.Element => {
    const history = useHistory();

    const onAnimationEnd = () => {
        setTimeout(() => {history.push("/home");},500)
    }

    return <div className="loading-cont">
        <div className="loading-box">
            <div className="logo">SG</div>
            <div className="ow-name" onAnimationEnd={onAnimationEnd}>Shubham Gautam</div>
        </div>
    </div>
}


export default Loading;