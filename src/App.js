import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import 'antd/dist/antd.css'

import Toolbar from './components/Toolbar/Toolbar'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import MyOrders from './components/MyOrders/MyOrders'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Toolbar />
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/orders' component={MyOrders} />
      </BrowserRouter>
    </div>
  );
}

export default App;
