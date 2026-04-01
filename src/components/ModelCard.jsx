
import { useState } from "react";

const ModelCard = ({ cart, products, setProducts }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleCartAdded = () => {
    setIsAdded(true);
    setProducts([...products, cart]);
    

  };

  return ( 
    
    <div className='gap-4 p-4 bg-base-100 shadow-sm border border-gray-200 rounded-lg'>
      <div>
        <h2 className='text-2xl font-bold'>{cart.name}</h2>
        <p className='text-[#627382]'>{cart.description}</p>
        <p className='text-2xl font-bold'>{cart.price}</p>
        <p>{cart.period}</p>
        <p>{cart.tagType}</p>
        <p>{cart.features}</p>
        <img src={cart.icon} alt="" />

          <button onClick={handleCartAdded} className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-2 px-15 border rounded-lg '>{isAdded ? 'Added' : 'Add to Cart'}</button>
          

      </div>
      </div>
  
  
  );
};

export default ModelCard;
