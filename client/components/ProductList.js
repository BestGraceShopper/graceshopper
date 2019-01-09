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
    addToCart: (productId) => dispatch(addToCart(productId))
  }
}

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  handleAddToCart(productId) {
      this.props.addToCart(productId)
  }
  render() {
    const products = this.props.products
    //console.log(products)
    return (
      <Grid relaxed columns={3}>
        {products.map(product => (
          <Grid.Column key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              id={product.id}
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
