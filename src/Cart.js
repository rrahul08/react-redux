import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
  return (
    <div>
       {/* <h1>Cart-{cartItems.length}</h1> */}
       <div className='flex ml-20 mt-20 mr-[50px] gap-[50px]'>
       {cartItems.map((items)=>(
       <div className='border 2px solid border-slate-600 rounded-2xl py-3 '>
       
       <h1 className='mt-5 ml-5  font-semibold'>{items.name}</h1>
       
       <h1 className='ml-5 mb-5 font-semibold'>Rs.250</h1>
       <h1 className='ml-5 mr-5 mb-5 text-gray-500'>Tender, Spicy and Juicy. Original or Peri-Crusted</h1>
      
       </div> ))}
      
       </div>
    </div>
  )
}

export default Cart;