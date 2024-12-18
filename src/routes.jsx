import App from './App'
import Shop from './pages/Shop/Shop'
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/Cart/Cart'

const routes = [
  {
    path: '/',
    element: <App />,
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
