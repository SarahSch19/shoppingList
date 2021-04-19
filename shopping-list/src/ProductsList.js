import React from 'react';
import ReactDOM from 'react-dom';
import './ProductsList.css';
import './Cart.css';
import './FilterBar.css';
import './general.css';
import bag from './bag.svg';
import refresh from './refresh.svg';
import cross from './cross.svg';

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

const cartItems = [] ;

let filter = "";

function addToCart (itemName) {
    const nb = parseInt(document.getElementById('select-' + itemName).value) ;
    let found = 0;
    cartItems.forEach(product => {
        if (product.name === itemName) {
            product.quantity += nb;
            found = 1;
        }
    })
    if (!found) {
        items.forEach(i => {
            if (i.name === itemName) {
                const item = {name: itemName, quantity: nb, unitPrice: i.price};
                cartItems.push(item);
            }
        })
    }
    updateCart();
}

function removeFromCart (itemName) {
    for (let i = 0 ; i < cartItems.length ; ++i) {
        if (cartItems[i].name === itemName)
            cartItems.splice(i, 1);
    }
    updateCart();
}

function updateCart () {
    ReactDOM.render(
        <Cart />,
        document.getElementById('CartContainer')
    )
}


class FilteredProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filter: ""};
    }

    filter() {
        filter = document.getElementById('FilterInput').value;
        ReactDOM.render(
            <ProductsList filter={filter}/>,
            document.getElementById('ProductsList')
        );
    }

    render() {
        return (
            <section className="FilteredProductsList">
                <h2>Articles</h2>
                <FilterBar/>
                <div id={"ProductsList"}>
                    <ProductsList />
                </div>
            </section>
        )
    }
}

class ProductsList extends FilteredProductsList {
    pushRows() {
        let bg = 'bgLight' ;
        const rows = [] ;
        items.forEach(product => {
            bg = bg === 'bgDark' ? 'bgLight' : 'bgDark';
            rows.push(
                <Product
                    item={product}
                    key={product.name}
                    boxBg={bg}
                />
            )
        });
        return rows ;
    }

    render() {
        return (
            <div className="ProductsList">
                {this.pushRows()}
            </div>
        )
    }
}

class Product extends ProductsList {
    setOptions(itemName) {
        let options = [];
        for (let i = 1 ; i <= 25 ; ++i) {
            options.push(<option key={itemName + i}>{i}</option>)
        }
        return options;
    }

    render() {
        const item = this.props.item ;
        if (filter === "" || item.name.indexOf(filter) !== -1) {
            let productClass = 'Product ' + this.props.boxBg;

            return (
                <div className={productClass}>
                    <div className="Info textLeft">{item.name}</div>
                    <div className="Info textRight">{item.price} €</div>
                    <select className={"Info"} id={"select-" + item.name}>
                        {this.setOptions(item.name)}
                    </select>
                    <div className="Info">
                        <button className="BtnAdd" onClick={() => {
                            addToCart(item.name)
                        }}>
                            <img src={bag} alt="Ajouter au panier"/>
                        </button>
                    </div>
                </div>
            )
        } else
            return ("");
    }
}

class FilterBar extends FilteredProductsList {
    render() {
        return (
            <div className={"FilterBar"}>
                <input type={"text"} id={"FilterInput"} placeholder={"Nom de l'article"} />
                <button id={"FilterButton"} onClick={() => {
                    this.filter();
                }}>Rechercher</button>
            </div>
        )
    }
}

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refresh() {
        this.setState({}) ;
    }

    pushRows() {
        const rows = [] ;
        cartItems.forEach(product => {
            rows.push(
                <CartProduct
                    item={product}
                    key={product.name}
                />
            )
        });
        return rows;
    }

    render() {
        const rows = this.pushRows();
        return (
            <section className="Cart">
                <h2>Mon panier</h2>
                <img id={"Refresh"} src={refresh} alt="refresh" onClick={() => {
                    this.refresh()
                }} />
                {rows}
                <CartTotal rowsLength={rows.length} />
            </section>
        )
    }
}

class CartProduct extends Cart {
    render() {
        const item = this.props.item;
        return (
            <div className="CartItem">
                <div className={"Item"}>
                    <div>{item.quantity} x {item.name}</div>
                    <div className={"UnitPrice"}>{item.unitPrice.toFixed(2) + ' €'}</div>
                </div>
                <span className={"ItemsPrice Item"}>{(item.quantity * item.unitPrice).toFixed(2) + " €"}</span>
                <img src={cross} alt={"remove"} className={"Cross Item"} onClick={() => {
                    removeFromCart(item.name);
                }} />
            </div>
        )
    }
}

class CartTotal extends Cart {
    computeTotalCart () {
        let total = 0.0;
        cartItems.forEach(item => {
            total += item.unitPrice * item.quantity;
        })
        return total;
    }

    render() {
        return (
            this.props.rowsLength === 0 ? "" : <h3>Total {this.computeTotalCart().toFixed(2)} €</h3>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <main>
                <div id={"CartContainer"}>
                    <Cart />
                </div>
                <FilteredProductsList />
            </main>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

export default Main;