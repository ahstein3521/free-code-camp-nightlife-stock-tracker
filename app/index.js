import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Home from './components/home'

import createSocketIoMiddleware from 'redux-socket.io';

import io from 'socket.io-client';
const socket = io('http://localhost:3333');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const store=applyMiddleware(socketIoMiddleware)(createStore)(reducers)



ReactDOM.render(
<Provider store={store}>
   <Home/>
</Provider>
  
  , document.querySelector('.app'));



