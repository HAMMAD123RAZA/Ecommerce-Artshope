'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const PaginationControls = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') || '1'
  const per_page = searchParams.get('per_page') || '6'

  return (
    <div className="flex gap-2 justify-center items-center ">
      <button
        className="bg-[#5B20B6] text-white py-3 rounded-md px-4"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}
      >
        prev page
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className="bg-[#5B20B6] text-white py-3 rounded-md px-4 "
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}
      >
        next page
      </button>
    </div>
  )
}

export default PaginationControls
