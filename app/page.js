import Card from './comoponents/Card'
import Footer from './comoponents/Footer'
import Header from './comoponents/Header'
import { getUserByEmail, createUser, getProducts } from '@/sanity/sanity-utils'
import { currentUser } from '@clerk/nextjs'
import PaginationControls from './comoponents/PaginationControls'

export default async function page({ searchParams }) {
  const user = await currentUser()

  if (!user) {
    return <h1 className="text-lg text-center">Not Logged In...</h1>
  }

  const existingUser = await getUserByEmail(user.emailAddresses[0].emailAddress)
  if (existingUser.length === 0) {
    await createUser({
      name: user?.fullName,
      email: user?.emailAddresses[0].emailAddress,
      user: existingUser,
    })
  }

  const products = await getProducts()

  ///for pagination //
  const page = searchParams['page'] || '1'
  const per_page = searchParams['per_page'] || '6'

  // mocked, skipped, and limited in the real app
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  const entries = products.slice(start, end)

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#5B20B6] text-center ">
          Get Artistic Prints
        </h1>
        <p className="text-center text-xl font-bold font-mono [text-gray-500">
          Elavate Your Space with stunning art prints, Transform your
          Surroundings
        </p>
      </div>
      <div className="p-10">
        <div className=" max-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
          {entries.map((item) => {
            return <Card key={item._id} product={item} />
          })}{' '}
        </div>
      </div>

      <div className="py-10">
        <PaginationControls
          hasNextPage={end < products.length}
          hasPrevPage={start > 0}
        />
      </div>

      <div className="py-10 ">
        <Footer />
      </div>
    </div>
  )
}
