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
import AllCategories from './pages/AllCategories/AllCategories.jsx'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { handleRefresh } from './Redux/authSlice.js'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {index: true, element: <Home />},
    {path: 'register', element: <Register />},
    {path: 'login', element: <Login />},
    {path: 'shop', element: <Shop />},
    {path: 'AllCategories', element: <AllCategories />},
    {path: 'shop/productDetails/:id', element: <ProductDetails />},
    {path: 'wishlist', element: <ProtectedRoute><Wishlist /></ProtectedRoute>},
    {path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute>},
    {path: 'checkout', element: <ProtectedRoute><Checkout /></ProtectedRoute>},
    {path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute>, children:[
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
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem("userInfo") !== null){
      dispatch(handleRefresh(JSON.parse(localStorage.getItem("userInfo"))))
    }
  }, [])

  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    </>
  )
}

export default App
