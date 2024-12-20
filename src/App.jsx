import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />
}

export default App
