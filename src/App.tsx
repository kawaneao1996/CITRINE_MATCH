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
  {
    path: "/questionnaire",
    element: <QuestionnaireTemplate />,
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
