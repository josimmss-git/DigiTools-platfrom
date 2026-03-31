import React from 'react';
import logo from '../../assets/Vector.png'
import banner from '../../assets/banner.png';

const Banner = () => {
  return (

    <section>
      <div className='banner flex justify-space-between items-center gap-4  w-10/12 mx-auto py-10'>
        
        <div className='banner-content grid grid-cols-1 gap-4'>
          
        <h5 className='bannerhead bg-[#E1E7FF] rounded-2xl py-1.5 px-2 inline'>New: AI-Powered Tools Available</h5>

        <h1 className='bannermain text-[#101727] text-3xl font-extrabold '>Supercharge Your<br /> Digital Workflow</h1>
        <p className='bannerp text-[#627382] text-sm'>Access premium AI tools, design assets, templates, and productivity
         software—all in one place. Start creating faster today.
            Explore Products
        </p>
        
        <div className='flex gap-2 font-bold p-2'>
         <button className='bg-blue-500 text-white py-2 px-4 rounded-2xl'>Explore Products</button>
        
          <div className='flex border 2px solid to-blue-500 rounded-2xl gap-2 items-center p-2'>
            
              <div className=''> <img src={logo} alt="Logo" /></div>
              <div> <button>
            Watch Demo</button> </div>
         
        
          </div>
          </div>


          </div>
     

      <div>
        <img src={banner} alt="Banner" />
        </div>

      </div>
      
    
    
     </section>  
  );
}

export default Banner;