import React from "react";

import MainHeader from "../main-header";
import Search from "../search";
import List from "../list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends React.Component {

  render() {
    const todoData = [
      { label: "Learn", important: true, id: 1 },
      { label: "Use", important: true, id: 2 },
      { label: "Drink!!!", important: true, id: 3 },
      { label: "Sleep...ZZZzzzzz", important: false, id: 4 }
    ];
    return (
      <div className="todo-app">
        <MainHeader />
        <div className="top-panel d-flex">
          <Search />
          <ItemStatusFilter />
        </div>
        <List todos={todoData} />
      </div>
    );
  }
};