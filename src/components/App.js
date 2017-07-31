import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import '../styles/App.css';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'
//=====================================
const API_KEY = "AIzaSyB2OAcszdbo3PrDa04VMwWSx6DjoPKXQqg"

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({key: API_KEY, term: 'cinefix'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }



    render() {
        return (
            <div className='App'>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
