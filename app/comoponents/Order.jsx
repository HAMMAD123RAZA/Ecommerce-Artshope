
const Order = () => {
    const products = [
      { id: 1, name: 'Painting 1', paid: "paid", status: "delivered"},
      { id: 2, name: 'Painting 2', paid: "paid", status: "delivered" }
    ];
  
    return (
      <div className='max-w-3xl mx-auto mt-20'>
        <h1 className='text-3xl text-center font-semibold text-[#5B20B6] mb-6'>Cart</h1>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b border-gray-200'>
              <th className='px-4 py-3'>Product</th>
              <th className='px-4 py-3'>Qty</th>
              <th className='px-4 py-3'>paid</th>
  
              <th className='px-4 py-3'>status</th>
            </tr>
          </thead>
  
          <tbody>
            {products.map(product => (
              <tr key={product.id} className='border-b border-gray-200'>
  
                <td className='px-4 py-3'>{product.name}</td>
                <td className='px-4 py-3'>{product.qty}</td>
                <td className='px-4 py-3'>{product.paid}</td>
                <td className='px-4 py-3'>{product.status}</td>
              </tr>
              
            ))}
          </tbody>
  
        </table>
      </div>
    );
  }
  
  export default Order;