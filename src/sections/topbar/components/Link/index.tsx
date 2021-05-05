import * as React from "react";
import "./styles.css";

type linkProps = {
  title: string;
  isActive: boolean;
  onClick?: () => void;
};

const link = (props: linkProps): React.ReactElement<{}> => {
  const { title, onClick, isActive } = props;
  const onLinkClick = (): void => {
    console.log("link clicked");
    onClick && onClick();
  };
  return (
    <div
      className={`${isActive ? "link active" : "link"}`}
      onClick={onLinkClick}
    >
      {title}
    </div>
  );
};

export default link;
