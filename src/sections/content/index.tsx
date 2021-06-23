import "./styles.css";

import * as React from "react";

import IntroBlock from "../Intro";
import VideoBlock from "../../components/VideoBlock";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// center content block
const Content = (): React.ReactElement<{}> => {
  let query = useQuery();
  const content = query.get("content");

  const getContentBlock = React.useCallback(() => {
    switch (content) {
      case "medium":
        return <div>medium</div>;
      case "github":
        return <div>github</div>;
      case "youtube":
      default:
        return <VideoBlock />;
    }
  }, [content]);

  return (
    <div className="content">
      <main className="main-content font-mono">
        <IntroBlock />
        <section>
          <div className="content-cont">
            <div
              style={{ height: 30, width: 30 }}
              className="origin-center transform rotate-90 "
            >
              {content}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Content;
