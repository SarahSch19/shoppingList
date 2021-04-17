import logo from './logo.svg';
import './App.css';

function App() {
  console.log(items);
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
    </div>
  );
}

const items = [
  {name: "coca", price: 1.70},
  {name: "orangina", price: 2.33},
  {name: "pepsi", price: 1.34},
  {name: "pepsi max", price: 2.01},
  {name: "evian", price: 1.56},
  {name: "oasis", price: 2},
  {name: "tropico", price: 0.91},
  {name: "minut maid", price: 1.1},
  {name: "ice tea", price: 1.5},
  {name: "nestea", price: 1.23},
  {name: "caprisun", price: 1.7},
  {name: "perrier", price: 2},
  {name: "chips", price: 1.99},
  {name: "mars", price: 1.44},
  {name: "snickers", price: 1.44},
  {name: "ferrero", price: 6.87},
  {name: "orange", price: 2.58},
  {name: "pomme", price: 1.91},
  {name: "kiwi", price: 2.34},
  {name: "ananas", price: 4.21},
  {name: "citron", price: 1.90},
  {name: "fraise", price: 5.99},
  {name: "framboise", price: 8.99},
  {name: "coco", price: 8.44},
  {name: "clémentine", price: 2.22},
  {name: "pitaya", price: 16.5},
  {name: "mangue", price: 3.99}
]

export default App;
