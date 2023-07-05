import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import "./index.scss"
import { AppProvider } from './AppContext/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>

);