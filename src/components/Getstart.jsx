import React from 'react';
import cart from '../assets/user.png'





 

const Getstart = () => {
  return (
    <div className='bg-[#F9FAFC] w-10/12 mx-auto text-center py-10 rounded-2xl'>
      <div >
        <h1 className='text-3xl font-extrabold text-[#101727]'>Get Started in 3 Steps</h1>
        <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-4 '>
        <div className='bg-white p-4 text-center rounded-2xl mt-10 flex flex-col  items-center gap-4 py-10'>
          <img src={cart} alt="" />
          <h4 className='text-2xl font-bold'>Create Account</h4>
          <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='bg-white p-4 text-center rounded-lg mt-10 flex flex-col items-center gap-4'>
          <img src={cart} alt=" " />
          <h4 className='text-2xl font-bold'>Create Account</h4>
          <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='bg-white p-4 text-center rounded-lg mt-10 flex flex-col items-center gap-4'>
          <img src={cart} alt="" />
          <h4 className='text-2xl font-bold'>Create Account</h4>
          <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default Getstart;