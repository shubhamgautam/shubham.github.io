import * as React from "react";
import {getYtVideos} from "../../api/YoutubeVidsAPI";
import "./index.css";

type VideoBlockProps = {
    id: string;
}

const VideoElement = (props: VideoBlockProps) : React.ReactElement<{}> => {
    return <div className="mx-5">
                    <iframe width="450" height="280"
            src={`https://www.youtube.com/embed/${props.id}`}>
            </iframe>
    </div>
}

const VideoBlock = (): React.ReactElement<{}> => {
    const [videoData, setVideoData] = React.useState<any>([]);
   
    React.useEffect(() => {
        getYtVideos().then(data => {setVideoData(transformData(data))} ).catch();
    },[])


    return <div className="flex  video-cont justify-between">
            {
                videoData.length? videoData.map((videoId : string, idx: number)=> <VideoElement key={idx} id={videoId}/> ): []
            }
            
        </div>
}

const transformData = (data: any[]) => {
    return data.map((item: any) => {
        return item.contentDetails.videoId
    })
}

export default VideoBlock;