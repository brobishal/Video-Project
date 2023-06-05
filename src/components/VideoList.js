import React from 'react';
import VideoItem from './VideoItem'
;
const VideoList =  (props) =>{
    // props.videos

    const renderedList = props.videos.map((video)=>{
        return <VideoItem video={video} />


    })

    // return <div>{props.videos.length }</div>
    return <div>{renderedList  }</div>


}

export default VideoList;
