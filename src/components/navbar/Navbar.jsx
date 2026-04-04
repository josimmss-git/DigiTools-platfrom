import React from 'react';
import cart from '../../assets/cart.png'

const Navbar = () => {
  return (
    <div>
      <section className="main w-10/12 mx-auto "> 

        
        
      <div className="navbar bg-base-100 shadow-sm grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-end mx-auto justify-between p-7">
        
   
        

      <div className="navbar font-bold text-9xl ">
    <h1 className='font-bold text-[2rem] text-green-500'>DigiTools</h1>
  </div>
 
      <div className="nav-menu">
        
            <ul className='flex gap-4 mx-auto' style={{ cursor: "pointer" }} >

              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>

               </ul>
        
    </div>
     
   
 
          <div className="navbar-end gap-2">
            <img src={cart} alt="Cart" />
 <button
 
  className="cursor-pointer"
>
  Login
</button>
            
     <button
  className="bg-gradient-to-r from-[#55f639d6] to-[#27186c64] text-white rounded-3xl p-3"
  style={{ cursor: "pointer" }}
>
  Get Started
</button>
  </div>


   


     </div>
      </section> 
       
    </div>
  );
};

export default Navbar;

