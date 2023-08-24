import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Logregifor from './Layout/Logregifor';
import Login from './Component/Login';
import Forgot from './Component/Forgot';
import Registation from './Component/Registation';

import Main from './Layout/Main';
import Home from './Component/Home';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Logregifor/>,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/forgot",
          element: <Forgot />,
        },
        {
          path: "/registation",
          element: <Registation />,
        },
      ],
    },
    {
      path: "/home",
      element: <Main/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;