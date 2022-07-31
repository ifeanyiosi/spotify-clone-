import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import { initialState } from './reducer'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


