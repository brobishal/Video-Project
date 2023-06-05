import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from './VideoList';


class App extends React.Component {
  // we initialzed our state

  state = { videos:[]};
  onTermSubmit = async(term) => {
    const response = await youtube.get('/search',{
        params:{
            q:term
        }
        // ////////////123 ko 4.34 ma pugeko chha
    })

    this.setState({videos:response.data.items})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFromSubmitData={this.onTermSubmit} />
        {/* I have {this.state.videos.length} videos. */}
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
