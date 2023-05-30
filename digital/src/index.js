import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import store from "../src/storage/store";


ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>
);
document.getElementById('root');
