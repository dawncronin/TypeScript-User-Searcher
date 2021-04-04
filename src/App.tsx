import React, { useState} from 'react';
import './App.css';

import UserList from './components/user-list'

function App() {
  return (
    <div>
      <h1>Typescript User Searcher</h1>

      <UserList />

      {/* <footer>
        <h5>dawn cronin 2021</h5>
      </footer> */}
    </div>
  );
}

export default App;
