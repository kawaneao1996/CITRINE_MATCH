import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeTemplate from './templates/HomeTemplate';
import QuestionnaireTemplate from './templates/QuestionnaireTemplate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTemplate />,
  },
  // TODO error pageを作成する
  {
    path: "/questionnaire",
    element: <QuestionnaireTemplate />,
  },
  {
    path: "/chat",
    element: <div>chatをこれから作るよ！</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App
