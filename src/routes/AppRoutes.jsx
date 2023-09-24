import { Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import NotFoundPage from "../views/NotFoundPage"
import Product from "../views/Product"
import Products from "../views/Products"
import Layout from "../components/Layout/Layout"

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />}/>
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productID" element={<Product />} />
              <Route path="/authentication" element={''} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes
