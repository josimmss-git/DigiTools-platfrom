
import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ cart, products, setProducts }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleCartAdded = () => {
    setIsAdded(true)

    const isFund = products.find((cart) => cart.id === products.id)
    if(isFund){
      toast.error("Product already added to cart!")
      return;
    }





    setProducts([...products, cart])
    toast.success("Product added to cart!")

  };

  return ( 
    
    <div className='p-4 bg-base-100 shadow-sm border border-gray-200 rounded-lg'>
      <div className="flex flex-col gap-2">
        <div className="py-4 flex justify-between">  <img src={cart.icon} alt={cart.icon} />
          <p className="bg-gradient-to-r from-[#55f639d6] to-[#27186c64] text-white rounded-2xl p-2">{cart.tagType}</p> </div>
        
        <h2 className='text-2xl font-bold'>{cart.name}</h2>
        <p className='text-[#627382]'>{cart.description}</p>
        <p className='text-2xl font-bold'>{cart.price}/{cart.period}</p>
        
        <p>{cart.features.join(", ")}</p>
      
      

          <button onClick={handleCartAdded} className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border rounded-lg '>{isAdded ? 'Added' : 'Add to Cart'}</button>
          

      </div>
      </div>
  
  
  );
};

export default ModelCard;
