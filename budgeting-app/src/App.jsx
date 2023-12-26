import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// Layouts
import Main from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: dashboardLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
        loader: dashboardLoader,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
  
]);


function App() {
  return (
    <> 
     <RouterProvider router={router} />
    </>
  )
}

export default App
