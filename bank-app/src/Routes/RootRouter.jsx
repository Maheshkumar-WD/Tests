import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Components/Login/Login";
import DematAccountForm from "../Components/OpenDematAccount/DematAccountForm";
import DashboardPage from "./Pages/DashboardPage";
import Home from "./Pages/Home";
import PrivateRoute from "./Pages/PrivateRoute";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/newaccount", element: <DematAccountForm /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        ),
        children:[
            {path:"alltransactions",element:<h1>All Transations</h1>},
            {path:"transfer/:id",element:<h1> transfer Page</h1>},
            {path:"ministatement",element:<h1>Mini Statement</h1>},
            {path:"deposit/:id",element:<h1>Deposit</h1>},

        ]
      },
    ],
    errorElement:<h1 style={{textAlign:"center"}}>404: Page Not Found!</h1>
  },
]);

let AllRoutes = (children) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
export default AllRoutes;
