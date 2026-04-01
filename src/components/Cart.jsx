import { use } from 'react';
import ModelCard from './ModelCard';

const Cart = ({ dataPromise, products, setProducts }) => {
  const Carts = use(dataPromise);
 




  return (
    <>

      
    <div className='grid md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-4 my-10'>

      {Carts.map((cart) =>
        <ModelCard key={cart.id} cart={cart} products={products} setProducts={setProducts} />
      )}
    </div> </>
  );
};

export default Cart;