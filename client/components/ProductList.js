import React from 'react'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import {Grid} from 'semantic-ui-react'
import {getAllProducts} from '../store/productReducer'

const mapState = state => {
  console.log(state)
  console.log(state.productReducer.products)
  return {
    products: state.productReducer.products
  }
}

const mapDispatch = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  }
}

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
    console.log(this.props)
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
            />
          </Grid.Column>
        ))}
      </Grid>
    )
  }
}

const connectedProducts = connect(mapState, mapDispatch)(ProductList)
export default connectedProducts
