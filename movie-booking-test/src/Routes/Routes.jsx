import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllShowsPage from "./Pages/AllShowsPage";
import SingleShow from "../Components/Shows/SingleShow";
import { showsLoader } from "./Loaders/ShowsLoader";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <AllShowsPage />,
    loader:showsLoader
  },
  {
    path:"/show/:showId",
    element:<SingleShow />
  }
]);

const RootRouter = ({ children }) => (
  <RouterProvider router={rootRouter}>{children}</RouterProvider>
);

export default RootRouter;
