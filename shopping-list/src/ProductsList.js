import React from 'react';
import ReactDOM from 'react-dom';
import './ProductsList.css';
import './Cart.css';
import bag from './bag.svg';

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

const cartItems = [
    {name: "coca", price: 1.70, quantity: 2}
] ;

function addToCart (itemName) {
    const nb = document.getElementById('select-' + itemName).value ;
    console.log(nb, itemName, cartItems);
}

class Product extends  React.Component {
    render() {
        const item = this.props.item ;
        let productClass = 'Product ';
        productClass += this.props.boxBg === 0 ? 'bgLight' : 'bgDark' ;
        let options = [];
        for (let i = 1 ; i <= 25 ; ++i) {
            options.push(<option>{i}</option>)
        }
        return (
            <div className={productClass}>
                <div className="Info textLeft">{item.name}</div>
                <div className="Info textRight">{item.price} €</div>
                <div className="Info">
                    <select id={"select-" + item.name}>
                        {options}
                    </select>
                    <button className="BtnAdd" onClick={() => {
                        addToCart(item.name)
                    }}>
                        <img src={bag} alt="Ajouter au panier"/>
                    </button>
                </div>
            </div>
        )
    }
}

class ProductsList extends React.Component {
    render() {
        const rows = [] ;
        let i = 0 ;
        items.forEach(product => {
            i = i === 0 ? 1 : 0;
            rows.push(
                <Product
                    item={product}
                    key={product.name}
                    boxBg={i}
                />
            )
        });
        return (
            <section className="ProductsList">
                {rows}
            </section>
        )
    }
}

class FilterProductsList extends React.Component {
    render() {
        return (
            <div>
                <ProductsList />
            </div>
        )
    }
}

class CartProduct extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <div className={item.name}>
                <span>{item.name} : {item.quantity} * {item.price} € = {item.quantity * item.price} €</span>
            </div>
        )
    }
}

class Cart extends React.Component {
    render() {
        const rows = [] ;
        cartItems.forEach((product) => {
            rows.push(
                <CartProduct
                    item={product}
                    key={product.name}
                />
            )
        });
        return (
            <section className="Cart">
                {rows}
            </section>
        )
    }
}

ReactDOM.render(
    <main>
        <FilterProductsList />
        <Cart />
    </main>,
    document.getElementById('root')
);

export default ProductsList;