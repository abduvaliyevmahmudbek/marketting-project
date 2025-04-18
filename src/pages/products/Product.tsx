import React from "react"
import { BsBagCheckFill, BsHeart } from "react-icons/bs"
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
  // labelColor,
  price,
  oldPrice,
  discount,
  comments,
}) => {
  const navigate = useNavigate()

  return (
    <div className="relative rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition duration-300">
      {discount && (
        <span className="absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1 rounded-[16px_0px_16px_0] font-medium">
          Chegirma
        </span>
      )}
      <button title='liket' className="absolute top-3 right-2 text-xl border rounded-full p-2 hover:bg-gray-100 mr-2">
              <BsHeart />
            </button>
      <img src={image} alt={name} className="mx-auto w-full object-contain rounded-[16px_16px_0px_0] bg-[#EDEEF2]" />
      <div className="space-y-1 p-4">
        <div className="flex justify-between items-start">
          <h3 onClick={() => navigate(`product-detail/${name}`)} className="font-semibold text-lg text-gray-800 truncate cursor-pointer">{name}</h3>
          <div className="flex flex-col items-end text-yellow-500 text-xm font-medium">
            <span>★★★★★</span>
            <span className="text-gray-500 text-[10px]">{comments} ta izoh</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{size} • {type}</p>
        <p className="text-sm font-semibold mt-1 text-green-600">{label}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="relative mt-1">
            {oldPrice && <span className="text-xs text-gray-400 line-through absolute top-[-8px] left-[50px] w-[100px]">{oldPrice}</span>}
            <span className="text-lg font-bold text-black">{price}</span>
          </div>
          <button type="button" title="Yopish" className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition">
            <BsBagCheckFill className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
