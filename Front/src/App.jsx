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
import Profile from './pages/Profile/Profile.jsx'
import AccountSittings from './components/AccountSittings/AccountSittings.jsx'
import Orders from './components/Orders/Orders.jsx'
import AccountWishlist from './components/AccountWishlist/AccountWishlist.jsx'
import AccountAddress from './components/AccountAddress/AccountAddress.jsx'
import OrderDetails from './components/OrderDetails/OrderDetails.jsx'

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
    {path: 'profile', element: <Profile />, children:[
      {path: '', element: <AccountSittings />},
      {path: 'orders', element: <Orders />},
      {path: 'orders/:OrderDetails', element: <OrderDetails />},
      {path: 'wishlist', element: <AccountWishlist />},
      {path: 'address', element: <AccountAddress />},
    ]},
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
