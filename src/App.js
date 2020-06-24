import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import './assets/css/main.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
