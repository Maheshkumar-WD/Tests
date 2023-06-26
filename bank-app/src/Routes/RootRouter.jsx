import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import {
  loader as applicationLoader,
} from "./Pages/Loans/TrackApplications/Applications";
import { loader as AdminApplicationsLoader } from "./Pages/Admin/Applications/Applications";
import { lazy } from "react";
const Login = lazy(() => import("../Components/Login/Login"));
const DematAccountForm = lazy(() =>
  import("../Components/OpenDematAccount/DematAccountForm")
);
const DashboardPage = lazy(() => import("./Pages/DashboardPage"));
const Home = lazy(() => import("./Pages/Home"));
const PrivateRoute = lazy(() => import("./Pages/PrivateRoute"));
const DepositPage = lazy(() => import("./Pages/Deposits/DepositPage"));
const ProfilePage = lazy(() => import("./Pages/Profile/ProfilePage"));
const TransferPage = lazy(() => import("./Pages/Transfers/TransferPage"));
const AllTransactions = lazy(() =>
  import("../Components/AllTransactions/AllTransactions")
);
const LoanLayout = lazy(() => import("./Pages/LoanLayout"));
const PersonalLoanLayout = lazy(() =>
  import("./Pages/Loans/PersonalLoans/PersonalLoanLayout")
);
const Loans = lazy(() => import("./Pages/Loans/Loans"));
const PersonalLoans = lazy(() => import("./Pages/Loans/PersonalLoans/Loans"));
const PersonalLoanApplication = lazy(() => import("./Pages/Loans/PersonalLoans/PersonalLoanApplication"));
const Layout = lazy(() => import("./Pages/Loans/PersonalLoans/Layout"));
const Applications = lazy(() => import("./Pages/Loans/TrackApplications/Applications"));
const AuthorizedProtectedRoute = lazy(() => import("./Pages/Admin/AuthorizedProtectedRoute"))
const AdminLayout = lazy(() => import("./Pages/Admin/AdminLayout"))
const AdminApplications = lazy(() => import("./Pages/Admin/Applications/Applications"))

// import Login from "../Components/Login/Login";
// import DematAccountForm from "../Components/OpenDematAccount/DematAccountForm";
// import DashboardPage from "./Pages/DashboardPage";
// import Home from "./Pages/Home";
// import PrivateRoute from "./Pages/PrivateRoute";
// import DepositPage from "./Pages/Deposits/DepositPage";
// import ProfilePage from "./Pages/Profile/ProfilePage";
// import TransferPage from "./Pages/Transfers/TransferPage";
// import AllTransactions from "../Components/AllTransactions/AllTransactions";
// import LoanLayout from "./Pages/LoanLayout";
// import PersonalLoanLayout from "./Pages/Loans/PersonalLoans/PersonalLoanLayout";
// import Loans from "./Pages/Loans/Loans";
// import PersonalLoans from "./Pages/Loans/PersonalLoans/Loans";
// import PersonalLoanApplication from "./Pages/Loans/PersonalLoans/PersonalLoanApplication";
// import Layout from "./Pages/Loans/PersonalLoans/Layout";
// import AuthorizedProtectedRoute from "./Pages/Admin/AuthorizedProtectedRoute";
// import AdminLayout from "./Pages/Admin/AdminLayout";
// import AdminApplications from "./Pages/Admin/Applications/Applications";

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
          {
            path: "loans",
            element: <LoanLayout />,
            children: [
              {
                index: "",
                element: <PersonalLoanLayout />,
                children: [
                  { path: "", element: <Loans /> },
                  {
                    path: "personal-loan",
                    element: <Layout />,
                    children: [
                      { path: "", element: <PersonalLoans /> },
                      { path: "apply", element: <PersonalLoanApplication /> },
                    ],
                  },
                  { path: "gold-loan", element: <h1>Gold Loan</h1> },
                ],
              },
              {
                path: "track-application/:id",
                element: <Applications />,
                loader: applicationLoader,
              },
            ],
          },
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
  {
    path: "/admin",
    element: <AuthorizedProtectedRoute><AdminLayout /></AuthorizedProtectedRoute>,
    children: [
      {
        path: "applications/:id",
        element: (
          <AuthorizedProtectedRoute>
            <AdminApplications />
          </AuthorizedProtectedRoute>
        ),
      },
    ],
  },
]);

let AllRoutes = (children) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
export default AllRoutes;

// const Abc = () => {
//   return (

//     <Routes>
//       <Route path={"/dashboard"} element={<DashboardPage />}>
//         <Route index={true} element={<AllTransactions />} />
//       </Route>
//     </Routes>
//   );
// };
