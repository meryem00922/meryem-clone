import axios from "../api/axios";
import { useEffect, useState } from "react";
import { getVideoUrl } from "../constants/enpoints.constant";
import VideoCard from "../components/VideoCard/VideoCard";

const Main = () => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        const {data} = await axios.get(getVideoUrl());
        setVideos(data.items)
    }
    
    useEffect(() => {
        fetchVideos();
    }, [])


    return (
        <div className="content__video-list">
            {videos.map(video => <VideoCard {...video}/>)}
        </div>
    )
}

export default Main;