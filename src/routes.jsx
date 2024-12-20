import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about-us',
    element: <AboutUs />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
]

export default routes
