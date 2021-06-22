import "./index.css";

import * as React from "react";

import {
    CodeSandboxOutlined,
    CodepenCircleOutlined,
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    MediumOutlined,
    TwitterOutlined,
    YoutubeOutlined
} from '@ant-design/icons';

const SocilaMediaBar = () => {
    return <div className="social-media-bar">
        <ul className="social-icon-list">
            <li></li>
            <li></li>
            <li></li>
            <li>
                <GithubOutlined style={{ color: "white" }} />
            </li>
            <li>
                <TwitterOutlined style={{ color: "white" }} />
            </li>
            <li>
                <InstagramOutlined style={{ color: "white" }} />
            </li>
            <li>
                <YoutubeOutlined style={{ color: "white" }} />
            </li>
            <li>
                <LinkedinOutlined style={{ color: "white" }} />
            </li>
            <li>
                <CodepenCircleOutlined style={{ color: "white" }} />
            </li>
            <li>
                <CodeSandboxOutlined style={{ color: "white" }} />
            </li>
            <li>
                <MediumOutlined style={{ color: "white" }} />
            </li>
            <li></li>
            <li></li>
        </ul>
    </div>;
};

export default SocilaMediaBar;