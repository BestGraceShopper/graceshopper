import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import { getProduct } from '../../store/reducers/product'
import { addToCart } from '../../store/reducers/cart'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id)
  }
  handleAddToCart(product) {
    const addProductInfo = {
      product,
      quantity: 0,
      cartId: 1
    }
    console.log(addProductInfo)

    this.props.addToCart(addProductInfo)
  }

  render() {
    const { product } = this.props
    return (
      <Card>
        <Image
          as={Link}
          to={`/products/${product.id}`}
          centered
          height={300}
          width={300}
          src={product.imageUrl}
        />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>
            <span>${product.price}</span>
          </Card.Meta>
          <Card.Description>{product.description}</Card.Description>
          <Card.Meta>{product.tags}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              primary
              animated="vertical"
              onClick={() => this.handleAddToCart(product)}
            >
              <Button.Content hidden>Add to Cart</Button.Content>
              <Button.Content visible>
                <Icon name="shop" />
              </Button.Content>
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { singleProduct } = state.product
  return {
    product: singleProduct,
    cartData: state.cart.cartData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleProduct: id => dispatch(getProduct(id)),
    addToCart: product => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
