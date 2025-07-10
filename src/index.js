import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import MainContextProvider from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContextProvider>
      <Router>
        <App />
      </Router>
    </MainContextProvider>
  </React.StrictMode>
);
