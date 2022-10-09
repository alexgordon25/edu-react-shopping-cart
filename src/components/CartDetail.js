import { Component } from 'react'

const styles = {
    cartDetails: {
        position: 'absolute',
        right: '50px',
        width: '300px',
        backgroundColor: '#fff',
        marginTop: '25px',
        boxShadow: '1px 5px 5px rgba(0,0,0,0.3)',
        borderRadius: '5px',
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #eee',
    }
}

class CartDetail extends Component {
    render() {
        const { cart } = this.props
        console.log(cart);
        return (
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {cart.map(x => 
                        <li style={styles.product} key={x.name}>
                            <img alt={x.name} src={x.img} width='50' />
                            {x.name}
                            <span>{x.quantity}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CartDetail