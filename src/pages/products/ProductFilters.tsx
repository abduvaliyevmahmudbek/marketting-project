import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

const categories = ['Eshiklar', 'Derazalar', 'Ko‘p sotilgan', 'Chegirma', 'Brendlar']

function ProductFilters() {
  const [activeTab, setActiveTab] = useState('Eshiklar')

  return (
    <div className="container mx-auto px-4 py-6 containerPaddings_media_md">
      <h1 className="text-2xl font-bold mb-4">Mahsulotlar</h1>

      <div className="hidden md:flex items-center justify-between border-y p-2 border-gray-200 mb-6">

        <div className="flex space-x-6 overflow-x-auto text-sm font-medium text-gray-500">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? 'text-black border-b-2 border-black'
                  : 'hover:text-black transition'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded text-sm text-gray-600 hover:bg-gray-100 transition whitespace-nowrap">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="flex flex-col gap-4 md:hidden border-y py-4 border-gray-200 mb-6">
        <div className="flex items-center justify-between gap-4">

          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full text-sm font-medium text-gray-900"
          >
            {categories.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>

          <button className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 transition whitespace-nowrap">
            Filtrlash
          </button>
        </div>
      </div>

      <div>
        {/* <p className="text-gray-500">"{activeTab}" bo‘limidagi mahsulotlar shu yerda chiqadi.</p> */}
      </div>
    </div>
  )
}

export default ProductFilters
