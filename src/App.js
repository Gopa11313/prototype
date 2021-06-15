import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
