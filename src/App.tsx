import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import ProductDetail from "./pages/products/ProductDetail"
// import api from "./api"
import productServices from "./api/services/productServices"

function App() {

  const productData =productServices.getProducts
  const ProductByid =productServices.getProductById

  console.log(productData,ProductByid);
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product-detail/:name" element={<ProductDetail />} />
    </Routes>
    </>
  )
}

export default App