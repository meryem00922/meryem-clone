const VideoCard = (props) => {
    return (
        <div class="video-card-container" id="video-card-container">
            <div class="video-card_img-box">
                <a href={'/watch?v=7NrVwhhV5u0'}>
                    <img src={props.snippet.thumbnails.default.url} class="video-card_img" alt={props.snippet.title} loading="lazy"/>
                        <div class="video-card_img-time-box"><span class="video-card_img-time">1:41:52</span>
                        </div>
                </a>
            </div>
            <div class="flex gap-2">
                <div class="min-w-10">
                    <a href="#">
                        <img src={"hello"} class="channel-img" alt={"hello"} loading="lazy"/>
                    </a>
                </div>
                <a href="./watch.html?v=7NrVwhhV5u0">
                    <div class="video-card_description">
                        <p class="line-clamp-2 font-bold">{props.snippet.title}</p>
                        <p class="video-card_channel-title">{props.snippet.channelTitle}</p>
                        <div class="text-zinc-700 dark:text-gray-400 flex gap-1 items-center">
                            <span class="text-sm">1M views</span><span>•</span><span class="video-card_publish">16 hours ago</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default VideoCard