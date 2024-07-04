import React from 'react'
import { Card } from './Card'

const products = [
    {
      id: 1,
      name: 'Nike Air Force 1 07 LV8',
      href: '#',
      price: 47199,
      quantity:1,
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    },
    {
      id: 2,
      name: 'Nike Blazer Low 77 SE',
      href: '#',
      price: 1549,
      quantity:1,
      size: '8 UK',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
    },
    {
      id: 3,
      name: 'Nike Air Max 90',
      href: '#',
      price: 2219,
      quantity:1,
      size: '8 UK',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
    }
]

function ProductList({addtocart}) {
  return (
    <div className=" scroll-style w-[60%] bg-gray-900 flex flex-wrap gap-12 justify-center overflow-x-scroll we p-6">
      {products.map((items)=><Card key={items.id} data={items} addtocart={addtocart}/>)}
    </div>
  )
}

export default ProductList
