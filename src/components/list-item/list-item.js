import React, { Component } from "react";
import "./list-item.css";

export default class ListItem extends Component {
  // state = {
  //   done: false,
  //   important: false
  // };
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false
  //   };
  // }
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`);
  //   };
  // }

  onButtonImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important
    } = this.props;

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
          onClick={onToggleDone}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-ambulance" />
        </button>
      </span>
    );
  }
}
