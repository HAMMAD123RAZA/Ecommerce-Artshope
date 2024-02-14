import Details from '@/app/comoponents/Details'
import Header from '@/app/comoponents/Header'
import { getProductBySlug } from '@/sanity/sanity-utils'

const page = async ({ params }) => {
  const { slug } = params

  const data = await getProductBySlug(slug)
  return (
    <>
      <Header />

      <Details data={data[0]} />
    </>
  )
}

export default page
