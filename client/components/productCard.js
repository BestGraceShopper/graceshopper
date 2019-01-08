import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ProductCard = () => (
    <Card>
        <Image src='http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png'/>
        <Card.Content >
            <Card.Header> Girl </Card.Header>
            <Card.Meta> 
                <span> $30000.00 </span>
            </Card.Meta>

        </Card.Content>
        <Card.Content extra>
           <Button animated='vertical' fluid>
            <Button.Content hidden> Add To Cart </Button.Content>
            <Button.Content visible>
                <Icon name='shop' />
            </Button.Content>
           </Button>
        </Card.Content>
    </Card>
)

export default ProductCard