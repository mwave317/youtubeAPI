import React, { Component } from 'react';
import Searchbar from './components/searchbar';
import ReactDOM from 'react-dom';
import VideoList from './components/video_list';
import YouTubeSearch from 'youtube-api-search';
import VideoDetail from './components/videodetail';
const API_KEY = 'AIzaSyDGQKXlMcKAxOrexG_JqnZfkA3YF5CSb2w';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

      //This is the same as this.setState({videos: videos})
    this.videoSearch('surfboards');
  }

  videoSearch(searchterm) {
    YouTubeSearch({key: API_KEY, searchterm: searchterm}, (videos) => { //Intead of using data, I choose the same name as the key to shorten the code as shown below.
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
       });
  }
  render() {
return(
  <div>
<Searchbar onSearchTermChange={searchterm => this.videoSearch(searchterm)}/>
<VideoDetail video={this.state.selectedVideo} />
<VideoList
onVideoSelect={selectedVideo =>this.setState({selectedVideo}) }
videos={this.state.videos} />
</div>
);
};
};
ReactDOM.render(<App/>, document.querySelector('.container'));
