import * as React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

type linkProps = {
  title: string;
  url: string;
  isActive: boolean;
  onClick?: () => void;
};

const link = (props: linkProps): React.ReactElement<{}> => {
  const { title, onClick, isActive, url } = props;

  return (
    <Link
      className={`${isActive ? "link active" : "link"}`}
      to={`/home?content=${title.toLocaleLowerCase()}`}
      replace
    >
      {title}
    </Link>
  );
};

export default link;
