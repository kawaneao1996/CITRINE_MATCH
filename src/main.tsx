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
import { ROUTER_BASE_URL, ROUTER_CHAT_URL, ROUTER_QUIZ_URL } from './utils/URL.ts';

const router = createBrowserRouter([
  {
    path:  ROUTER_BASE_URL,
    element: <App />,
    children:[
      {
        path: ROUTER_BASE_URL,
        element: <HomeTemplate />,
      },
      {
        path: ROUTER_QUIZ_URL,
        element: <QuestionnaireTemplate />,
      },
      {
        path: ROUTER_CHAT_URL,
        element: <div>chatをこれから作るよ！</div>,
      },
    ],
    errorElement: <div>Not Found</div>,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

