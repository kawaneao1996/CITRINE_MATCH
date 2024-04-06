import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import HomeTemplate from './templates/HomeTemplate.tsx'
import QuestionnaireTemplate from './templates/QuestionnaireTemplate.tsx'
import { ROUTER_BASE_URL, ROUTER_CHAT_URL, ROUTER_QUIZ_URL } from './utils/URL.ts';
import ChatTemplate from './templates/ChatTemplate.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import { Session, createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

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

const supabase = createClient('https://sfjhnjthiyrjexayqpci.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmamhuanRoaXlyamV4YXlxcGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzODM2MDIsImV4cCI6MjAyNzk1OTYwMn0.SOBVY4Zdg8t2bBMjTkg7TWN-_lVAnbQF2UJKLrdOCL4');

function AppAuth() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'twitter',]}
      />
    )
  }
  else {
    console.log(session);
    return (<RouterProvider router={router} />
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppAuth />
  </React.StrictMode>,
)

