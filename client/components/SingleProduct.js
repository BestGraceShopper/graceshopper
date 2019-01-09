import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../store/productReducer'
import {Card, Icon, Image, Button} from 'semantic-ui-react'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id)
  }
  render() {
    const {product} = this.props
    return (
      <Card>
        <Image centered height={300} width={300} src={product.imageUrl} />
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
            <Button primary animated="vertical">
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
  const {productReducer} = state
  const {singleProduct} = productReducer
  return {product: singleProduct}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleProduct: id => {
      dispatch(getProduct(id))
    }
  }
}

const SingleProductDetail = connect(mapStateToProps, mapDispatchToProps)(
  SingleProduct
)
export default SingleProductDetail