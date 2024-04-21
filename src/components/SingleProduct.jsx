import React from 'react'
import { Button, Card  } from 'react-bootstrap'
import { CartState } from '../context/Context'


function SingleProduct({prod}) {
    const {state: {cart}, dispatch} =CartState()
  return (
    <div style={{width:"25%", margin:"10px"}}>
        <Card>
            <Card.Img  variant='top' src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>${prod.price.split(".")[0]}</span>
                </Card.Subtitle>

                {
                    cart.some(p=>p.id === prod.id)?(
                        <Button variant='danger' onClick={()=>{dispatch({
                            type:'REMOVE_FROM_CART',
                            payload:prod
                        });
                        }}>
                        Remove from Cart
                    </Button>
                    ):(
                        <Button   onClick={()=>{dispatch({
                            type:'ADD_TO_CART',
                            payload:prod
                        });
                        }}>
                        Add to Cart
                    </Button>
                    )
                }
               
               
            </Card.Body>
        </Card>

    </div>
  )
}

export default SingleProduct