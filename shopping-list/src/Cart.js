import React from 'react'
import ReactDOM from 'react-dom'

const cartItems = [
    {name: "coca", price: 1.70, quantity: 2}
] ;

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
                <script src="addToCart.js"></script>
            </section>
        )
    }
}

ReactDOM.render(
    <Cart />,
    document.getElementById('cart')
)

export default Cart