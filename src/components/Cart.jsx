import React from 'react'
import { CartState } from '../context/Context'
import { ListGroup } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'

function Cart() {
  const {state: {cart}, dispatch}= CartState()
  return (
    <div>
      <ListGroup>
        {cart.map((prod)=>{
          return (
            <>
              <div style={{display:'flex', gap:"30px", margin:"40px"}}>
                <img src={prod.image} alt={prod.name} />
                <span>
                  <p>{prod.name}</p>
                  <p>{prod.price.split(".")[0]}</p>
                </span>
                <AiFillDelete style={{cursor:'pointer'}} onClick={()=>{
                  dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:prod
                  })
                }} />
              </div>
            </>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default Cart