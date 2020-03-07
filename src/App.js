import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Toolbar />
      <BurgerBuilder />
    </div>
  );
}

export default App;
