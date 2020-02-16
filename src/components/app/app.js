import React, { Component } from "react";

import MainHeader from "../main-header";
import Search from "../search";
import List from "../list";
import "./app.css";
import ItemStatusFilter from "../item-status-filter";
import AddListItem from "../add-list-item";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("drink!"),
      this.createTodoItem("Learn"),
      this.createTodoItem("Use"),
      this.createTodoItem("Drink!"),
      this.createTodoItem("Sleep...ZZZzzzzz"),
      this.createTodoItem("drink!")
    ],
    term: "",
    filter: "all"
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: ++this.maxId
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArr = [...before, ...after];
      return {
        todoData: newArr
      };
    });
  };

  addListItem = str => {
    this.setState(({ todoData }) => {
      // const maxId = Math.max(
      //   ...todoData.map(item => {
      //     return item.id;
      //   }),
      //   0
      // );
      // const str = (Math.random() + 1).toString(36).substr(2, 5);
      const el = this.createTodoItem(str);
      const newArr = [...todoData, el];

      return {
        todoData: newArr
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    return newArr;
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  searchItems(arr, text) {
    if (text.length === 0) {
      return arr;
    }
    return arr.filter(el =>
      el.label.toLowerCase().includes(text.toLowerCase())
    );
  }

  onSearchChange = term => {
    this.setState({ term });
  };
  onFilterChange = filter => {
    this.setState({ filter });
  };

  filterItems(arr, filter) {
    switch (filter) {
      case "all":
        return arr;
      case "active":
        return arr.filter(item => !item.done);
      case "done":
        return arr.filter(item => item.done);
      default:
        return arr;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filterItems(
      this.searchItems(todoData, term),
      filter
    );
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <MainHeader todo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <Search onSearchChange={this.onSearchChange} />
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <List
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddListItem addListItem={this.addListItem} />
      </div>
    );
  }
}
