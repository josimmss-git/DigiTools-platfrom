import React from 'react';
import cart from '../assets/cart.png'

const Products = ({ products, setProducts }) => {
  const totalPrice = products.reduce((total, cart) => total + parseFloat(cart.price.replace('$', '')), 0);

  const handlepayment = () => {
    setProducts([]);
  };

  const handleRemove = (cartId) => {
    const filteredArray= products.filter(cart => cart.id !== cartId.id)
    setProducts(filteredArray);
   
  }
  
  return (
    
    <div className='bg-base-100 p-10 w-10/12 mx-auto my-10 rounded-lg gap-10'>
      <h1 className='text-2xl font-bold'>Your Carts</h1>

      {

        products.length === 0 ? <div className='bg-base-200 flex justify-center py-16 rounded-2xl '> <img className='w-10 ' src= {cart} alt= {cart} /> <p className='text-2xl'>  Cart is Empty</p></div> : <>
            {
        products.map(cart => (
         
           <div key={cart.id} className='p-4 
          border mb-3 flex justify-between items-center
           rounded-2xl bg-blue-400 text-white'>
            <div className=''>
              <h2 className='text-2xl font-bold'>
              {cart.name}</h2>
            <p className='text-[#627382]'>
              {cart.description}</p>
            
            

            <p className='text-2xl font-bold'>
              {cart.price}
              
            </p>
              
            </div>
            <div>
              <button onClick={() => handleRemove(cart)} className='text-red-500'>Remove</button>
            </div>
          </div>

          
        ))
      }

      <div className='bg-gray-600 text-2xl font-bold py-3 px-5 rounded-2xl text-white flex 
      justify-between mx-auto'>
        <div>Total</div>
            <div>${totalPrice}</div>
          
          </div>
          
      <div className='mt-5'>
            <button onClick={handlepayment}
              className='bg-red-500 text-2xl
               font-bold py-3 px-5 
        rounded-2xl text-white flex justify-center mx-auto w-full'>Proceed to Checkout</button>
      </div>

        </>
      }
      

    



    </div>
  );
};

export default Products;