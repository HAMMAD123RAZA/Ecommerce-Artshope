'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import useCartStore from '../CartStore'

const Details = ({ data }) => {
  const [quantity, setQuantity] = useState(1)
  const cart = useCartStore((state) => state.cart)
  const addToCart = useCartStore((state) => state.addToCart)
  console.log(cart) 

  const handleAddToCart = () => {
    addToCart({ product: data, quantity: quantity })
  }
    return (
    <>
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="shadow-md relative h-88 overflow-hidden aspect-auto-1 ">
            <Image src={data?.image} alt="" layout="fill" objectFit="cover" />
          </div>

          {/*right*/}
          <div className="flex flex-col p-6 justify-between">
            <h1 className="text-3xl font-semibold [text-[#5B20B6]">
              {data?.name}
            </h1>
            <p className="text-lg mt-4 [text-gray-500">{data?.description}</p>
            <div className="mt-5">
              <span className="text-2xl font-semibold [text-[#5B20B6]">
                ${data?.price}
              </span>
            </div>
            <div className="mt-6 flex flex-col [text-gray-500">
              <label htmlFor="">Qty</label>
              <input
                type="text"
                defaultValue={1}
                onChange={(e)=>{
                  setQuantity(e.target.value)
                }}
                className='w-20 px-4 h-10 border "border-gray-300 rounded-md'
              />
            </div>
            <div className="mt-3">
              <button
                onClick={handleAddToCart}
                className="bg-[#5B20B6] text-white py-3 rounded-md px-4"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
