import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductsList from './ProductsList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ProductsList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
