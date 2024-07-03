import React from 'react'
import { Trash, Heart } from 'lucide-react'


export function Cart({cartitems,removefromcart}) {

  return (
    <div className="scroll-style mx-6 w-[50%] overflow-x-auto  flex max-w-3xl flex-col space-y-4 p-12 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl text-white font-bold">Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
        praesentium incidunt.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {cartitems.map((product) => (
          <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.imageSrc}
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8 text-white">{product.name}</h3>
                    <p className="text-sm text-white">{product.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-white font-semibold">{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" onClick={()=>removefromcart(product)} className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <Trash  className="text-red-800" size={16} />
                    <span className="text-red-800">Remove</span>
                  </button>
                  <span className="text-red-800">{product.quantity}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-white text-right">
        <p>
          Total amount:
          <span className="font-semibold "> Rs.{cartitems.reduce((sum,item)=>sum+item.price*item.quantity,0)}</span>
        </p>
      </div>
    </div>
  )
}
