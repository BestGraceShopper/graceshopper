import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import ProductCard from './ProductCard'
import { getAllProducts, addToCart } from '../store/reducers/product'

class ProductList extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  handleAddToCart(product) {
    this.props.addToCart(product)
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
    products: state.product.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    addToCart: product => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
