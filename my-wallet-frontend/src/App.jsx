import './App.css';
import {Home} from './pages/home/Home'
import {Outcome} from './pages/outcome/Outcome'
import {Landingpage} from './pages/landingpage/Landingpage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Outcome",
    element: <Outcome/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
