import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
  return (
    <div>
       <h1>Cart-{cartItems.length}</h1>
       <div className='flex ml-20 mt-20 mr-[50px] gap-[50px]'>
       {cartItems.map((items)=>(
       <div className='border 2px solid border-slate-600 '>
       
       <h1 className='m-5'>{items.name}</h1>
       
       <h1 className='ml-5'>Price{}</h1>
       <h1 className='ml-5 mr-5 mb-5'>Lorem epsum lorem jbjrf cjfirh dkhfdiehf cjpifdh jbecjedb ehfehf efhefh</h1>
      
       </div> ))}
      
       </div>
    </div>
  )
}

export default Cart;