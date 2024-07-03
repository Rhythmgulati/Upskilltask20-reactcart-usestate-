import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import ProductList from './components/ProductList'
import { Cart } from './components/Cart'


function App() {
  let [cart,setcart]=useState([]);

function addtocart(shoe){
setcart((prevItems)=>
  {
    const existing = prevItems.find(item=>item.id==shoe.id);
    if(existing){
      return prevItems.map(item=>item.id===shoe.id?{ ...item, quantity: item.quantity + 1 } : item)
    }else{
    return [...prevItems,shoe]}
  });  
}
function removefromcart(shoe){
  console.log(shoe);
  setcart((previtems)=> {
  const existing = previtems.find(item=>item.id==shoe.id);
  if (existing.quantity === 1) {
    return previtems.filter(item => item.id !== shoe.id);
  } else {
    return previtems.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item )
  }
}
);
  console.log(cart);
}


  return (
    <>
    <Header/>
    <main className="flex w-full h-[93vh] bg-gray-800">
      <ProductList addtocart={addtocart}/>
      <Cart cartitems={cart} removefromcart={removefromcart}/>
    </main>
    </>
  )
}

export default App
