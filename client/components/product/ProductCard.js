import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ProductCard = props => (
  <Card>
    <Image
      as={Link}
      to={`/products/${props.product.id}`}
      centered
      height={150}
      width={150}
      src={props.product.imageUrl}
    />
    <Card.Content>
      <Card.Header>{props.product.name}</Card.Header>
      <Card.Meta>
        <span>${props.product.price}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button as={Link} to={`/products/${props.product.id}`}>
          <Button.Content visible>View Product</Button.Content>
        </Button>
        <Button
          onClick={() => props.addToCart(props.product)}
          primary
          animated="vertical"
        >
          <Button.Content visible>Add to Cart</Button.Content>
          <Button.Content hidden>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>
    </Card.Content>
  </Card>
)

export default ProductCard
