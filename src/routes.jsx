import App from './App'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ProductList from './components/ProductList/ProductList'
import ProductPage from './components/ProductPage/ProductPage'
import Checkout from './pages/Checkout/Checkout'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      {
        path: 'shop',
        element: <Shop />,
        children: [
          { index: true, element: <ProductList /> },
          { path: ':productId', element: <ProductPage /> },
        ],
      },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
    ],
    errorElement: <ErrorPage />,
  },
]

export default routes
