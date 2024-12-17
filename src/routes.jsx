import App from './App'

const routes = [
  {
    path: '/',
    element: <App currentRoute={'/'}/>,
  },
  {
    path: 'about-us',
    element: <App currentRoute={'about-us'}/>,
  },
  {
    path: 'shop',
    element: <App currentRoute={'shop'}/>,
  },
  {
    path: 'cart',
    element: <App currentRoute={'cart'}/>,
  },
]

export default routes;