import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ProductCard from './ProductCard'
import { getAllProducts } from '../../store/reducers/product'
import { addToCart, createNewCart } from '../../store/reducers/cart'

class ProductList extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  handleAddToCart(product) {
    const addProductInfo = {
      product,
      quantity: 0,
      // HARDCODED ORDERID RIGHT HERE, NEED TO ACCESS
      cartId: 1
    }

    this.props.addToCart(addProductInfo)
  }

  render() {
    const products = this.props.products
    return (
      <Grid relaxed columns={3}>
        {products.map(product => (
          <Grid.Column key={product.id}>
            <ProductCard
              product={product}
              addToCart={this.handleAddToCart.bind(this)}
            />
          </Grid.Column>
        ))}
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    cart: state.cart.cart,
    cartData: state.cart.cartData,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    createNewCart: () => dispatch(createNewCart()),
    addToCart: product => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
