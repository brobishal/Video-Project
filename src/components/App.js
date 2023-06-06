import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  // we initialzed our state

  state = { videos: [], selectedVideo: null };

  //default search
  //componentDidMount life cycle method inside of app component
  // this life sy attempt to mix default search when this app first render to the screen

  componentDidMount() {
    // when app loads then always first show to the users
    // default search term
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
      // ////////////123 ko 4.34 ma pugeko chha
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    // console.log("from the app............", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFromSubmitData={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column ">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            {/* I have {this.state.videos.length} videos. */}
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
