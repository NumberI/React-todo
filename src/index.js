import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import Search from './components/search';
import List from './components/list';

const App = () => {
  const todoData = [
    {label: 'Learn', important: true, id:1},
    {label: 'Use', important: true, id:2},
    {label: 'eat', important: false, id:3},
    {label: 'drink!', important: false, id:4},
    {label: 'sleep...zzzzzzz', important: true, id:5}
  ];
  const isLoggedIn = true;
  const loginBox = <span>Log in please...</span>;
  const welcomeBox = <span>Welcome Back!</span>;
  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <Search />
      <List todos={todoData}/>
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root'));