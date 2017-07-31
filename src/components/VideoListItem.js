import React from 'react';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                    <div className="">{video.snippet.channelTitle}</div>
                </div>
            </div>

        </li>
    )
}

// export default class VideoListItem extends Component {
//     constructor(props) {
//         super(props)
//
//     }
//
//     render() {
//         let renderLI = this.props.videos.map(video => {
//             return (
//                 <li>{video.snippet.title}</li>
//
//             )
//         })
//         return (
//             <div>
//                 {renderLI}
//             </div>
//
//         )
//     }
// }
export default VideoListItem
