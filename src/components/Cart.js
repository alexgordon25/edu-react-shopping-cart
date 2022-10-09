import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import CartDetail from './CartDetail'

const styles = {
    cart: {
        fontSize: '1.5rem',
        backgroundColor: '#89fcbd',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        top: '0px',
        right: '-40px',
    }
}

class Cart extends Component {
    render() {
        const { cart, isCartDetailVisible, showCartDetail } = this.props
        const total = cart.reduce((acc, el) => acc + el.quantity, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {total !== 0
                        ? <BubbleAlert value={total}/>
                        : null }
                    
                </span>
                <button style={styles.cart} onClick={showCartDetail}>
                    🛒
                </button>
                {isCartDetailVisible
                ? <CartDetail cart={cart} />
                : null }
                
            </div>
        )
    }
}

export default Cart