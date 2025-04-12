import React from "react"
import { useNavigate } from "react-router-dom"

type ProductProps = {
  image: string
  name: string
  size: string
  type: string
  label: string
  labelColor: string
  price: string
  oldPrice?: string
  discount?: boolean
  comments: number
}

const Product: React.FC<ProductProps> = ({
  image,
  name,
  size,
  type,
  label,
  labelColor,
  price,
  oldPrice,
  discount,
  comments,
}) => {
  const navigate = useNavigate()

  return (
    <div className="relative p-4 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition duration-300">
      {discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full font-medium">
          Chegirma
        </span>
      )}
      <img src={image} alt={name} className="mx-auto w-full object-contain rounded-lg bg-[#EDEEF2]" />
      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-gray-800 truncate">{name}</h3>
          <div className="flex flex-col items-end text-yellow-500 text-xs font-medium">
            <span>★★★★★</span>
            <span className="text-gray-500 text-[8px]">{comments} ta izoh</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{size} • {type}</p>
        <p className="text-sm font-semibold mt-1" style={{ color: labelColor }}>{label}</p>
        <div className="relative mt-1">
          {oldPrice && <span className="text-xs text-gray-400 line-through absolute top-[-8px] left-[50px]">{oldPrice}</span>}
          <span className="text-lg font-bold text-black-600">{price}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => navigate(`product-detail/${name}`)} className="text-sm text-blue-600 hover:underline">
            Batafsil
          </button>
          <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
