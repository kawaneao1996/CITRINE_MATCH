import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeTemplate from './templates/HomeTemplate.tsx'
import QuestionnaireTemplate from './templates/QuestionnaireTemplate.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <HomeTemplate />,
      },
      {
        path: '/questionnaire',
        element: <QuestionnaireTemplate />,
      },
      {
        path: '/chat',
        element: <div>chatをこれから作るよ！</div>,
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

