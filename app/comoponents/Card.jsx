import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ product }) => {
  return (
    <>
    <Link href= {`/details/${product?.slug}` }>
      <div className="relative shadow-md max-w-sm cursor-pointer">
        <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
          <Image
            src={product?.image}
            layout="fill"
            objectFit="cover"
            alt="art"
          />
        </div>
        <div className="p-4 space-y-2">
          <h1 className="text-[#5B20B6] text-3xl font-semibold">
            {product?.name}
          </h1>
          <p className="text-sm text-gray-500 truncate">
            {product?.description}
          </p>
        </div>

        <div className="absolute bottom-0 right-0 shadow-md p-2 ">
          <span className="text-[#5B20B6] text-lg font-semibold">
            {product?.price}
          </span>
        </div>
      </div>
      </Link>
    </>
  )
}

export default Card