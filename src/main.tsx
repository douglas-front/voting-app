import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WorkSector from './pages/WorkSector/page.tsx'
import Voting from './pages/Voting/page.tsx'
import Adm from './pages/Adm/page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/WorkSector',
    element: <WorkSector />
  },
  {
    path: '/adm',
    element: <Adm />
  },
  {
    path: '/Voting',
    element: <Voting/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
