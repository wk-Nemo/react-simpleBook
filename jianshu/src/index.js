import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style'
import App from './App';
import { GlobalIconfont } from './statics/iconfont/iconfont'

ReactDOM.render( 
  <Fragment>
    <GlobalIconfont />
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
