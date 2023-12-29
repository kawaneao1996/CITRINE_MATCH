import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuestionaireTemplate from './templates/QuetionaireTemplate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home!</div>,
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
