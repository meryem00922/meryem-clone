import { KEY } from "./api.constant";

// Получение видео
export const getVideoUrl = (nextPageToken, maxResult = 8) =>
    `/videos?&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=RU&maxResults=${maxResult}&` +
    `pageToken=${nextPageToken ?? ""}&key=${KEY}`;
  
  // Получение видео по id
  export const getVideoByIdUrl = (videoId) =>
    `/videos?&part=snippet,contentDetails,statistics&id=${videoId}` +
    `&key=${KEY}`;
  
  // Получение канала по id
  export const getChannelUrl = (channelId) =>
    `/channels?part=snippet&id=${channelId}&key=${KEY}`;
  
  // Получение канала по id с статистикой
  export const getChannelWithStatisticUrl = (channelId) =>
    `/channels?part=snippet,statistics&id=${channelId}&key=${KEY}`;
  
  // Получение результатов по поиску
  export const getSearchUrl = (search_query, pageToken = "", maxResult = 8) =>
    `/search?part=snippet&type=video&videoDuration=medium` +
    `&maxResults=${maxResult}&pageToken=${pageToken}&q=${search_query}&key=${KEY}`;
  
  // Получение видео по id
  export const getVideoPartUrl = (idVideo) =>
    `/videos?part=contentDetails, statistics` +
    `&id=${idVideo}&key=${KEY}`;
  
  export const getVideoByMainVideoUrl = (videoTitle) =>
    `/search?part=snippet&maxResults=8&type=video&order=viewCount&videoDuration=medium&order=rating` +
    `&q=${videoTitle}&key=${KEY}`;
  
  export const getCommentByVideoUrl = (videoId, pageToken = "") =>
    `/commentThreads?part=snippet,replies&order=relevance&textFormat=plainText&maxResults=8` +
    `&pageToken=${pageToken}&videoId=${videoId}&key=${KEY}`;
  
  // export const videoInfoUrl = `${YOUTUBE_URL}/youtubei/v1/player`;
  
  export const urlForSearchVariation = (searchQuery) =>
    `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
  