import * as React from "react";
import { getYtVideos } from "../../api/YoutubeVidsAPI";
import "./index.css";

type VideoBlockProps = {
  id: string;
};

const VideoElement = (props: VideoBlockProps): React.ReactElement<{}> => {
  return (
    <div className="mx-5">
      <iframe
        width="450"
        height="280"
        src={`https://www.youtube.com/embed/${props.id}`}
      ></iframe>
    </div>
  );
};

const VideoBlock = (): React.ReactElement<{}> => {
  const [videoData, setVideoData] = React.useState<any>([]);
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    getYtVideos()
      .then((data) => {
        setVideoData(transformData(data));
      })
      .catch();
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ height: isOpen ? 450 : 10 }}
      className={`flex  video-cont justify-between items-center px-8 py-8 ease-in-out duration-700`}
    >
      <div
        onClick={toggleOpen}
        className={`${isOpen ? "caro-open" : "caro-close"}`}
      >
        ^
      </div>

      {videoData.length && isOpen
        ? videoData.map((videoId: string, idx: number) => (
            <VideoElement key={idx} id={videoId} />
          ))
        : []}
    </div>
  );
};

const transformData = (data: any[]) => {
  return data.map((item: any) => {
    return item.contentDetails.videoId;
  });
};

export default VideoBlock;
