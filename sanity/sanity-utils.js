import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: 'v2sl67eu',
  dataset: 'production',
  apiVersion: '1', // or "2024-02-08"
  useCdn: true,
  title: 'ArtShop',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
export default client

export async function getProductBySlug(slug) {
    return client.fetch(
      groq`*[_type == "product" && slug.current == $slug]{
        _id,
        createdAt,
        name,
        slug,
        description,
        price,
        "image": image.asset->url,
        "slug": slug.current,
      }`,
      { slug }
    );
  }
  
  export async function getProducts() {
    return client.fetch(
      groq`*[_type=="product"]{
              _id,
              createdAt,
              name,
              description,
              price,
              "image":image.asset->url,
              "slug":slug.current,
          }`
    )
  }
          
export async function getUserByEmail(email) {
  const query = groq`*[_type=="user"]{
        _id,
        createdAt,
        name,
        email,
        _id
    }`
  const data = await client.fetch(query)
  return data
}

export async function createUser(userData) {
  const { name, email } = userData
  const newUser = client.create({
    _type: 'user',
    name,
    email,
    createdAt: new Date().toISOString(),
  })
  return newUser
}
