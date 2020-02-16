import React, { Component } from "react";
import "./search.css";

export default class Search extends Component {
  state = {
    term: ""
  };

  onSearchChange = e => {
    const term = e.target.value;
    this.setState({
      term
    });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        type="text"
        className="search form-control"
        placeholder="Find out..."
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
