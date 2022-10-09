import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    products: [
      { name: 'Tomatoes', price: 1500, img: '/products/tomatoes.jpg'},
      { name: 'Chickpeas', price: 2500, img: '/products/chickpeas.jpg'},
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg'},
    ],
    cart: [],
    isCartDetailVisible: false,
  }

  addToCart = (product) => {
    
    const { cart } = this.state

    if (cart.find( x => x.name === product.name)) {
      const newCart = cart.map(x => x.name === product.name
        ? ({
          ...x, quantity: x.quantity + 1
        })
        : x)
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  showCartDetail = () => {
    if(!this.state.cart.length) {
      return
    }
    this.setState({ 
      isCartDetailVisible: !this.state.isCartDetailVisible
    })
  }

  render() {
    const { isCartDetailVisible } = this.state
    return (
      <div>
        <Navbar 
          cart={this.state.cart}
          isCartDetailVisible={isCartDetailVisible}
          showCartDetail={this.showCartDetail}
        />
        <Layout>
          <Title />
          <Products 
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
