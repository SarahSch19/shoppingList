import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
//import Products from './products/ProductsList';
import './App.css';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
          </header>
          <main>
              <div id="container"></div>
          </main>
      </div>
  );
}
export default App;