import React from 'react';
import ReactDOM from 'react-dom';
import cart from './cart.svg';

class ProductsList extends React.Component {
    render() {
        return (
            <div className="ProductsList">
                <img src={cart} className="Cart-logo" alt="cart" />
            </div>
        )
    }
}

class FilterProductsList extends React.Component {
    render() {
        return (
            <div>
                <ProductsList list={items} />
            </div>
        )
    }
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
] ;

ReactDOM.render(
    <FilterProductsList list={items} />,
    document.getElementById('root')
);

export default ProductsList;