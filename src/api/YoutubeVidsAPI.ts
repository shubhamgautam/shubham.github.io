export async function getYtVideos(): Promise<void | {}> {
    console.log("env value is",process.env.REACT_APP_YT_API_KEY);
    const playListId = "PLllrTcm7qxkg98VycxvjOhtJ4haP0skLr";

    return await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playListId}&&key=${process.env.REACT_APP_YT_API_KEY}`)
    .then(data => data.json())
    .then(list =>  list);
}