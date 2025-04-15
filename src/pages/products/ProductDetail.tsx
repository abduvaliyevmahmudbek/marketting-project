import { Link, useParams } from 'react-router-dom'
import { products } from './Products'
import Header from '@/components/header/Header'
import Navbar from '@/components/navbar/Navbar'
import Testimonials from '@/components/testimonials/Testimonials'
import ExtraPages from '@/components/extraOrderSections/ExtraPages'
import Footer from '@/components/footer/Footer'
import { BsHeart } from 'react-icons/bs'
import ProductFilters from './ProductFilters'

function ProductDetail() {
  const { name } = useParams<{ name: string }>()
  const product = products.find((p) => p.name === name)

  if (!product) {
    return <div className="text-red-500 p-4">Mahsulot topilmadi</div>
  }

  return (
    <>
      <Header />
      <Navbar />
      <ProductFilters/>
      
      <div className="container mx-auto px-4 py-4 text-sm text-gray-500 containerPaddings_media_md">
      <Link to="/" className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
      Bosh sahifa</Link>
       • <span className="text-gray-400">Eshiklar</span> •{' '}
        <span className="text-gray-400 cursor-pointer">MDF eshiklar</span> •{' '}
        <span className="text-gray-400 cursor-pointer">1 qanotli MDF eshiklari</span>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 containerPaddings_media_md">
        <div className="flex flex-col justify-center w-full rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-contain rounded-xl border border-gray-300 bg-[#EDEEF2]"
          />
          <div className="grid gap-3 mt-4 w-full"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(64px, 1fr))' }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded overflow-hidden border border-gray-300 hover:scale-105 transition duration-300">
                <img
                  src={product.image}
                  alt="thumb"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex-between">
            {product.name}
            <button className="text-xl border rounded-full p-2 hover:bg-gray-100">
              <BsHeart />
            </button>
          </h1>

          <div className="flex items-center gap-2 text-yellow-500 text-sm mb-2">
            {'★'.repeat(5)}
            <span className="text-gray-500 text-xs">(40 komment)</span>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
            )}
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-700 mb-1">Rang</p>
            <div className="flex gap-2">
              {['#5A3A1E', '#FFD700', '#FFFFFF'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-700 mb-1">O‘lchamlar</p>
            <div className="flex flex-wrap gap-2">
              {['120x200 sm', '130x200 sm', '140x200 sm', '150x200 sm', '150x200 sm', '150x200 sm'].map((size, i) => (
                <button
                  key={i}
                  className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-[#444444] hover:text-[#fff] transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4 cursor-pointer">
            <p className="font-medium text-gray-700 mb-1">Brendlar</p>
            <span className="inline-block px-4 py-1 text-sm bg-gray-800 text-white rounded-[20px]">
              {product.label}
            </span>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              Savatga qo‘shish
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      <Testimonials />
      <ExtraPages />
      <Footer />
    </>
  )
}

export default ProductDetail
