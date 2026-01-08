
import { formatViews } from "../utils/formatViews";

const VideoCard = ({ info }) => {
    if (!info) return null;
    console.log(info);
    const { snippet, statistics } = info; 
    const { channelTitle, title, thumbnails } = snippet;  
  return (
    <div className="m-2 p-2 w-80 hover:shadow-lg cursor-pointer">
            <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumbnail" />
            <ul>
                 <li className="font-bold py-2">{title}</li>
                 <li>{channelTitle}</li>
                 <li>{formatViews(statistics.viewCount)} views</li>
            </ul>
            
        </div>
  )
}

export default VideoCard;