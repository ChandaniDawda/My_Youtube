const GOOGLE_API_KEY ="AIzaSyD_iHisGSdMbpHmf09mYoqH0oPNOtpyKM8";

export const LIVE_CHAT_COUNT = 10;


export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=";
  
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

