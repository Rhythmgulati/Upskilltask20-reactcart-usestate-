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
    return previtems.filter(item => item.id !== shoe.id);
  
}
);
  console.log(cart);
}
function increment(shoe){
  setcart((prevItems)=> prevItems.map(item=>item.id===shoe.id?{ ...item, quantity: item.quantity + 1 } : item)
    );
    // console.log(cart);
}
function decrement(shoe){
  setcart((previtems)=> {
    const existingItem = previtems.find(item => item.id === shoe.id);
    if (existingItem.quantity === 1) {
      return previtems.filter(item => item.id !== shoe.id);
    } else {
      return previtems.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item )
    }
  })
}
const functions ={
  removefromcart,increment,decrement
}

  return (
    <>
    <Header/>
    <main className="flex w-full h-[93vh] bg-gray-800">
      <ProductList addtocart={addtocart}/>
      <Cart cartitems={cart} functions={functions} />
    </main>
    </>
  )
}

export default App
