import React from 'react';
import VideoListItem from './VideoListItem.js';


// this is an interesting example of two things:
// -- first, a functional component
// -- second, using a child component as a variable inside a .map function to loop and define the key. That's instead of doing it inside VideoListItem...
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;
