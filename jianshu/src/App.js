import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import { Provider } from 'react-redux';
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={ Home }></Route>
            <Route path='/login' exact component={ Login }></Route>
            <Route path='/write' exact component={ Write }></Route>
            <Route path='/detail/' exact component={ Detail }></Route>
          </div>
        </BrowserRouter>
      </Provider> 
    )
  }
}

export default App;
