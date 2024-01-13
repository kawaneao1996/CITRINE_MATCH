import './App.css'
import { Outlet } from "react-router-dom";
import Header from './organisms/Header';
import { BACKGROUND_THEME } from './utils/theme';
function App() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <div className={`flex flex-1 justify-center items-center`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}


export default App
