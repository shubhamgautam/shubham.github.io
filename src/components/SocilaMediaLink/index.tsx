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
            <li>
                <a href="https://github.com/shubhamgautam" aria-label="github" target="_blank" rel="noreferrer"><GithubOutlined className="social-media-icons"/></a>
            </li>
            <li>
                <a href="https://twitter.com/notoriousShubh" aria-label="twitter" target="_blank" rel="noreferrer"><TwitterOutlined className="social-media-icons"/></a>
            </li>
            <li>
                <a href="https://www.instagram.com/thenotoriousshubh/" aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramOutlined className="social-media-icons"/></a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UC9IFOtmDZ9bouTV4jd6YWNA" aria-label="Youtube" target="_blank" rel="noreferrer"><YoutubeOutlined className="social-media-icons"/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/shubham-gautam-aa370a2b/" aria-label="Linkedin" target="_blank" rel="noreferrer"><LinkedinOutlined className="social-media-icons"/></a>
            </li>
            <li>
                <a href="https://codepen.io/shubhamgautam" aria-label="Codepen" target="_blank" rel="noreferrer"><CodepenCircleOutlined className="social-media-icons"/></a>
            </li>
            <li>
                <a href="https://codesandbox.io/u/shubhamgautam" aria-label="Codesandbox" target="_blank" rel="noreferrer"><CodeSandboxOutlined className="social-media-icons"/></a>
            </li>
            <li>
                <a href="https://shubhamgautamlog.medium.com/" aria-label="Medium" target="_blank" rel="noreferrer"><MediumOutlined className="social-media-icons"/></a>
            </li>
            <li></li>
        </ul>
    </div>;
};

export default SocilaMediaBar;