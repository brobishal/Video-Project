import React from "react";

class SearchBar extends React.Component {
  // initialize the state inside of comp

  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // callback from parent component

    // this.props.onFormSubmitData(this.state.term);

    this.props.onFromSubmitData (this.state.term);
    // console.log(this.props.onFromSubmitData);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
