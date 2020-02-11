import React from 'react';
import ListItem from './list-item';

const List = ({ todos }) => {

  const elements = todos.map((item) => {
    const {id, ...other} = item;
    return (
      <li key={id}>
        <ListItem { ...other} />
          {/* // label={item.label}
          // important={item.important} */}
      </li>
    )
  });
    return (
      <ul>
        { elements }
      </ul>
    )
  }

export default List;