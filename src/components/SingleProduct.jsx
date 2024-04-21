import React from 'react'
import { Button, Card  } from 'react-bootstrap'

function SingleProduct({prod}) {
  return (
    <div>
        <Card>
            <Card.Img  variant='top' src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>${prod.price.split(".")[0]}</span>
                </Card.Subtitle>
                <Button variant='danger'>
                    Remove from Cart
                </Button>
                <Button>
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>

    </div>
  )
}

export default SingleProduct