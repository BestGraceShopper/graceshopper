import React from 'react'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import {Grid} from 'semantic-ui-react'
import {getAllProducts, addToCart} from '../store/reducers/product'

const mapState = state => {
  return {
    products: state.product.products
  }
}

const mapDispatch = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    addToCart: (product) => dispatch(addToCart(product))
  }
}

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  handleAddToCart(product) {
      this.props.addToCart(product)
  }
  render() {
    const products = this.props.products
    //console.log(products)
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

const connectedProducts = connect(mapState, mapDispatch)(ProductList)
export default connectedProducts
