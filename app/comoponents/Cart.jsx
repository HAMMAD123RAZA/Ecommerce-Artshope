'use client'
import React from 'react'
import Image from 'next/image'
import { FaTrash } from 'react-icons/fa'
import useCartStore from '../CartStore'

const Cart = () => {
  // const products = [
  //   { id: 1, name: 'Painting 1', price: 100, qty: 2 },
  //   { id: 2, name: 'Painting 2', price: 200, qty: 1 }
  // ];
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const totalItems = useCartStore((state) => state.totalItems)
  const cartTotal = useCartStore((state) => state.cartTotal)

  const handleRemove = (productId) => {
    removeFromCart(productId)
  }

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">
        Cart
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Remove</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => (
            <tr key={product.id} className="border-b border-gray-200">
              <td className="px-4 py-3 flex items-center">
                <Image
                  src={product.image}
                  className="mr-2"
                  alt="Painting"
                  width={40}
                  height={30}
                />
                {product.name}
              </td>

              <td className="px-4 py-3">{product.price}</td>
              <td className="px-4 py-3">{product.qty}</td>
              <td className="px-4 py-3">
                <FaTrash
                  onClick={() => {
                    handleRemove(product?._id)
                  }}
                  className="cursor-pointer "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Total Items: {totalItems}</p>
          <p className="text-lg font-semibold">Total Price: {cartTotal}</p>
        </div>

        <div className="mt-6 flex justify-center items-center">
          <button className="bg-[#5B20B6] text-white px-6 py-2 rounded-md w-lg">
            checkOut
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
