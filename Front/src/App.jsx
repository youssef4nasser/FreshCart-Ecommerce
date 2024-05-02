import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound.jsx'
import Layout from './pages/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Shop from './pages/Shop/Shop.jsx'
import Register from './pages/Register/Register.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import Wishlist from './pages/Wishlist/Wishlist.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {index: true, element: <Home />},
    {path: 'register', element: <Register />},
    {path: 'login', element: <Login />},
    {path: 'shop', element: <Shop />},
    {path: 'productDetails/:id', element: <ProductDetails />},
    {path: 'wishlist', element: <Wishlist />},
    {path: 'cart', element: <Cart />},
    {path: 'checkout', element: <Checkout />},
    {path: '*', element: <NotFound />},
  ]}
])

function App() {
  return (
    <>
     <RouterProvider  router={router}/>
    </>
  )
}

export default App
