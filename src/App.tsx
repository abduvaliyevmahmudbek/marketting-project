import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import ProductDetail from "./pages/products/ProductDetail"

function App() {
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