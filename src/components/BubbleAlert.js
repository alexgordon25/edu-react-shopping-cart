import { Component } from 'react'

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        color: '#fff',
        borderRadius: '50%',
        padding: '5px 5px',
        fontSize: '0.8rem',
        minWidth: '15px',
        position: 'absolute',
        textAlign: 'center',
    }
}

class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) { return ' ' }
        return n > 9 ? '9+' : n
    }
    render() {

        const { value } = this.props
        
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert