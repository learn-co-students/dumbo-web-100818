import React from "react";

class Search extends React.Component {
  state = {
    searchTerm: ""
  };

  changeHandler = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={e => this.props.searchHandler(e, this.state.searchTerm)}>
        <input
          type="text"
          placeholder="search term"
          value={this.state.searchTerm}
          onChange={this.changeHandler}
        />
        <button>Search</button>
      </form>
    );
  }
}
export default Search;
