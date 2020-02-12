import React, { Component } from "react";
import "./list-item.css";

export default class ListItem extends Component {
  state = {
    done: false,
    important: false
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false
  //   };
  // }
  onLabelClick = () => {
    if (this.state.done) {
      this.setState({
        done: false
      });
    } else {
      this.setState({
        done: true
      });
    }
  };
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`);
  //   };
  // }

  onButtonImportantClick = () => {
    if (this.state.important) {
      this.setState({
        important: false
      });
    } else {
      this.setState({
        important: true
      });
    }
  };
  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }
    // const color = {
    //   color: important ? "#50C878" : "black",
    //   fontWeight: important ? "bold" : "normal"
    // };

    return (
      <span className={classNames}>
        <span
          className="list-item-label"
          // style={color}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onButtonImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-ambulance" />
        </button>
      </span>
    );
  }
}
