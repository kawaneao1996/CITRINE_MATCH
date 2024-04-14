import React, {  } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createHashRouter,
} from "react-router-dom";
import HomeTemplate from './templates/HomeTemplate.tsx'
import QuestionnaireTemplate from './templates/QuestionnaireTemplate.tsx'
import { ROUTER_BASE_URL, ROUTER_CHAT_URL, ROUTER_QUIZ_URL } from './utils/URL.ts';
import ChatTemplate from './templates/ChatTemplate.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import { AppAuth } from './utils/AuthApp.tsx';

const router = createHashRouter([
  {
    path: ROUTER_BASE_URL,
    element: <App />,
    children: [
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
        element: <ChatTemplate />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppAuth router={router} />
  </React.StrictMode>,
)

