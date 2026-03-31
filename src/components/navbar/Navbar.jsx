import React from 'react';
import cart from '../../assets/cart.png'

const Navbar = () => {
  return (
    <div>
      <section className="main w-10/12 mx-auto "> 

        
        
      <div className="navbar bg-base-100 shadow-sm flex items-center justify-between p-7">
        
   
        

      <div className="navbar font-bold text-9xl ">
    <h1 className='font-bold text-[2rem] text-green-500'>DigiTools</h1>
  </div>
 
      <div className="nav-menu">
        
            <ul className='flex gap-4 mx-auto'>

              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>

               </ul>
        
    </div>
     
   
 
          <div className="navbar-end gap-2">
            <img src={cart} alt="Cart" />
     <button>Login</button>
            <button>Get Started
     </button>
  </div>


   


     </div>
      </section> 
       
    </div>
  );
};

export default Navbar;