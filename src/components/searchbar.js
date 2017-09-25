import React, { Component } from 'react';


export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: '',
    };

  }

  render() {
  return (
    <div className="search-bar">
    <input
    value={this.state.searchterm}
    onChange={event => this.onInputChange(event.target.value)}/>
    // Value of the input: {this.state.searchterm}
    </div>
  );
}
onInputChange(searchterm) {
this.setState({searchterm});
this.props.onSearchTermChange(searchterm);
}

};
