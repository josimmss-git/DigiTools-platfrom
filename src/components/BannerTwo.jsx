import React from 'react';

const BannerTwo = () => {
  return (
    <>
    <div className='banner-2 mx-auto py-10 flex items-center justify-center gap-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] '>
      <div>
        <p>50k+</p>
        <p>Active Users</p>
      </div>
      <div>
        <p>200+</p>
        <p>Premium Tools</p>
      </div>
      <div>
        <p>4.9</p>
        <p>Rating</p>
      </div>
      </div>
      <div className='w-10/12 mx-auto flex flex-col items-center justify-center gap-3 my-4 text-center'>
        <h1 className='text-[48px] font-extrabold text-[#001931]'>Premium Digital Tools</h1>
        <p className='text-[#627382]'> Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
        
      </div>
      
       </>
  );
};

export default BannerTwo;