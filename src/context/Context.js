import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { faker } from '@faker-js/faker';
import {cartReducer} from './Reducer'
const Cart = createContext();
function Context({children}) {
  const products =[...Array(20)].map(()=>({
    id:faker.string.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.avatar(),

  }));

  const [state, dispatch]= useReducer(cartReducer, {
    products: products,
    cart:[]
  });
 
  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
};

export default Context;
export const CartState=()=>{
  return useContext(Cart)
}
