import { useParams } from 'react-router-dom'
import { products } from './Products'

function ProductDetail() {
  const { name } = useParams<{ name: string }>()
  const product = products.find((p) => p.name === name)

  if (!product) {
    return <div className="text-red-500 p-4">Mahsulot topilmadi</div>
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-auto rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-1">Narxi: {product.price}</p>
      {product.oldPrice && <p className="text-gray-500 line-through mb-2">Old narx: {product.oldPrice}</p>}
      <p className="text-sm text-gray-700">{product.type} - {product.size}</p>
      <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full text-white" style={{ backgroundColor: product.labelColor }}>
        {product.label}
      </span>
    </div>
  )
}

export default ProductDetail
