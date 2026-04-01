
import Navbar from './components/navbar/Navbar'
import Banner from './components/Banner/Banner'
import BannerTwo from './components/BannerTwo'
import Cart from './components/Cart'
import Products from './components/Products'
import { useState } from 'react';


const getData = async () => {
  const res = await fetch("/public/Data.json")
  const data = await res.json()
  return data
}

const dataPromise=getData()


function App() {
  const [activeTab, setActiveTab] = useState("cart");
  const [products, setProducts] = useState([])


  return (
    <>
      <Navbar />
      <Banner />
      <BannerTwo />
      {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center w-10/12 mx-auto bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-35" aria-label="Products"
           onClick={() => setActiveTab("cart")}
        defaultChecked />
        
        <input type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-34"
          aria-label={"Cart (" + products.length + ")"}
          onClick={() => setActiveTab("products")}
        />
        
        
        
      </div>
     
      
     {activeTab === "cart" && <Cart dataPromise={dataPromise} products={products} setProducts={setProducts} />}

      {activeTab === "products" && <Products products={products} setProducts={setProducts} />}
    </>
  )
}

export default App;
