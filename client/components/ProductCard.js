import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ProductCard = props => (
  <Card>
    <Image centered height={150} width={150} src={props.imageUrl} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span>${props.price}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button as={Link} to={`/products/${props.id}`}>
          <Button.Content visible>View Product</Button.Content>
        </Button>
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

export default ProductCard
