import React from 'react'
import ReactDOM from 'react-dom'


class Cart extends React.Component {
    render() {
        return (
            <section className="Cart">
            This is my cart
        </section>
        )
    }
}

ReactDOM.render(
    <Cart />,
    document.getElementById('root')
)

export default Cart