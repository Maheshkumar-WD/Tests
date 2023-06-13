import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Components/Login/Login";
import DematAccountForm from "../Components/OpenDematAccount/DematAccountForm";
import DashboardPage from "./Pages/DashboardPage";
import Home from "./Pages/Home";
import PrivateRoute from "./Pages/PrivateRoute";
import DepositPage from "./Pages/Deposits/DepositPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import TransferPage from "./Pages/Transfers/TransferPage";
import AllTransactions from "../Components/AllTransactions/AllTransactions";

let router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/newaccount", element: <DematAccountForm /> },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          { path: "", element: <AllTransactions /> },
          { path: "transfer/:id", element: <TransferPage /> },
          { path: "ministatement", element: <h1>Mini Statement</h1> },
          { path: "deposit/:id", element: <DepositPage /> },
          {
            path: "account/:id",
            element: (
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
    errorElement: <h1 style={{ textAlign: "center" }}>404: Page Not Found!</h1>,
  },
]);

let AllRoutes = (children) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
export default AllRoutes;
