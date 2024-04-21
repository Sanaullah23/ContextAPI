import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct'
function Home() {
  const { state :{products}}=CartState()
  
  return (
    <div>
      
      <div>
         {
          products.map((prod)=>{
            return <SingleProduct prod={prod} key={prod.id}/>
          })
         }
      </div>
    </div>
  )
}

export default Home