import * as React from "react";
import "./styles.css";
import {useLocation} from "react-router-dom";
import VideoBlock from "../../components/VideoBlock";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// center content block
const content = (): React.ReactElement<{}> => {
  let query = useQuery();
  const content = query.get("content")

  const getContentBlock = React.useCallback(() => {
    switch(content) {
      case "medium":
        return <div>medium</div>;
      case "github":
          return <div>github</div>;
      case "youtube":
        default: 
          return  <VideoBlock />
    }
  }, [content])
  
  return (
    <div className="content-cont">
      <div>vertical title</div>
      <div>
        {getContentBlock()}
      </div>
    </div>
  );
};

export default content;
