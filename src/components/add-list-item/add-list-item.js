import React, { Component } from "react";
import "./add-list-item.css";

export default class AddListItem extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label !== "") {
      this.props.addListItem(this.state.label);
      this.setState({
        label: ""
      });
    } else {
      console.log("empty string!");
    }
  };

  render() {
    // const { addListItem } = this.props;
    return (
      <form className="add-list-item d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What add to todo list?"
          value={this.state.label}
        />
        <button type="submit" className="btn btn-outline-primary">
          Новое дело
        </button>
      </form>
    );
  }
}
