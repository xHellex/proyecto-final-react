import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/Store'
import {Provider} from 'react-redux'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import './index.css';
import Home from './Home';

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={Backend}>
      <Home/>
    </DndProvider>
  </Provider>,
  document.getElementById('root')
);