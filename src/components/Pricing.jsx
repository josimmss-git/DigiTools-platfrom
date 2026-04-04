import React from 'react';


const Pricing = () => {
  return (
    <div className='gap-5 p-10 mx-auto bg-amber-50 w-10/12 rounded-2xl my-10 flex justify-around flex-col  sm:flex-col-1  md:flex-col-2'>
      <div className=' text-center '>
        <h1 className='text-[#101727] font-extrabold text-3xl '>Simple, Transparent Pricing</h1>
        <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>


      <div className='flex justify-around gap-4  md:flex-row rounded-2xl flex-col items-center py-6 mt-10'> 
        <div className='bg-white gap-5 flex flex-col p-20 py-4  justify-between rounded-2xl'>
          
        <h1 className='p-4 text-2xl'>Starter</h1>
        <p className='text-[#627382]'>Perfect for getting started</p>
        <p className='text-[#101727] font-bold text-2xl'>$0/month</p>
        <p>Access to 10 free tools</p>
        <p>Basic templates</p>
        <p>Community support</p>
        <p>1 project per month</p>

        <button className="bg-gradient-to-r from-[#55f639d6] to-[#27186c64] text-white rounded-2xl p-2 my-2 inline-none"style={{ cursor: "pointer" }}>Get Start Free</button>
        </div>
        
      <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] gap-5 flex flex-col p-20 py-4  justify-between rounded-2xl text-white'>
        <h1 className='p-4 text-2xl '>pro</h1>
        <p className=''>Perfect for getting started</p>
        <p className='font-bold text-2xl'>$0/month</p>
        <p>Access to 10 free tools</p>
        <p>Basic templates</p>
        <p>Community support</p>
        <p>Access to 10 free tools</p>
        <p>Basic templates</p>
        
        <p>1 project per month</p>

      <button className="my-2 bg-white text-black rounded-2xl p-2 inline-none"style={{ cursor: "pointer" }}>Start Pro Trial</button>
        </div>
        
      <div className='bg-white gap-5 flex flex-col p-20 py-4 rounded-2xl bg-'>
        <h1 className='p-4 text-2xl'>Enterprise</h1>
        <p className='text-[#627382]'>Perfect for getting started</p>
        <p className='text-[#101727] font-bold text-2xl'>$99/month</p>
        <p>Access to 10 free tools</p>
        <p>Basic templates</p>
        <p>Community support</p>
        <p>1 project per month</p>
        <p>Basic templates</p>
        

        <button className="bg-gradient-to-r from-[#55f639d6] to-[#27186c64] text-white rounded-2xl p-2 my-2 inline-none"style={{ cursor: "pointer" }}>Contact Sales</button>

        </div>
        </div>
    </div>
  );
};

export default Pricing;