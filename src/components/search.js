import React from 'react';

const Search = () => {
  const searchText = "type tut";
  const searchStyle = {
    fontSize: '20px'
  };
  return <input 
    style={searchStyle}
    placeholder={ searchText } />
  }

export default Search;