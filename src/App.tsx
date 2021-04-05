import React from 'react';

import UserList from './components/user-list'

import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Typescript User Searcher</h1>

      <UserList />

      {/* <footer>
        <h5>dawn cronin 2021</h5>
      </footer> */}
    </div>
  );
}

export default App;
