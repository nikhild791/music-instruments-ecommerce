import React from 'react'
import EmptyCart from '../assests/images/EmptyCart.png'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
           <span className='dark:text-white text-3xl font-semibold'>Oops cart is empty</span>
             <img src={EmptyCart} alt="" />

         
      </div>
    </section> 
  )
}

export default Cart