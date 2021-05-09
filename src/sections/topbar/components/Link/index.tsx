import * as React from "react";
import "./styles.css";

type linkProps = {
  title: string;
  url: string;
  isActive: boolean;
  onClick?: () => void;
};

const link = (props: linkProps): React.ReactElement<{}> => {
  const { title, onClick, isActive, url } = props;
  const onLinkClick = (): void => {
    console.log("link clicked");
    onClick && onClick();
  };
  return (
    <a
      className={`${isActive ? "link active" : "link"}`}
      onClick={onLinkClick}
      href={url}
    >
      {title}
    </a>
  );
};

export default link;
