import React from 'react'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'
import {Grid} from 'semantic-ui-react'
import {getAllProducts} from '../store/product'

const mapState = state => {
  return {
    products: state.products
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
    // console.log(this.props.products)
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
