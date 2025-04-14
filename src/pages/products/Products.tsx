import Product from "./Product"
import doorPng from '../../assets/images/pictures-png/dool-png-P.png'

export const products = [
  {
    image: doorPng,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    labelColor: "text-green-600",
    price: "1 000 000 so‘m",
    oldPrice: "1 200 000 so‘m",
    discount: true,
    comments: 40,
  },
  {
    image: doorPng,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "AKFA",
    labelColor: "text-green-500",
    price: "1 200 000 so‘m",
    discount: false,
    comments: 40,
  },
  {
    image: doorPng,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    labelColor: "text-green-600",
    price: "1 050 000 so‘m",
    oldPrice: "1 300 000 so‘m",
    discount: true,
    comments: 30,
  },
  {
    image: doorPng,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "AKFA",
    labelColor: "text-green-500",
    price: "1 150 000 so‘m",
    discount: false,
    comments: 35,
  },
  {
    image: doorPng,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    labelColor: "text-green-600",
    price: "900 000 so‘m",
    oldPrice: "1 100 000 so‘m",
    discount: true,
    comments: 28,
  },
  {
    image: doorPng,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "AKFA",
    labelColor: "text-green-500",
    price: "1 300 000 so‘m",
    discount: false,
    comments: 50,
  },
]

const Products = () => {
  return (
    <div className="container containerPaddings_media_md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  )
}

export default Products