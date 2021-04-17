import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsList from './ProductsList';
import Cart from './Cart';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <ProductsList />
      <Cart />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
