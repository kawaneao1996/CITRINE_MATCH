import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuestionaireTemplate from './templates/QuetionaireTemplate';
import HomeTemplate from './templates/HomeTemplate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTemplate />,
  },
  {
    path: "/questionaire",
    element: <QuestionaireTemplate />,
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
