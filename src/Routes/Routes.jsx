import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserProfile";
import AdminHome from "../Pages/Dashboard/AdminHome";
import AdminRoute from "./AdminRoute";
import GuideRoute from "./GuideRoute";
import GuideHome from "../Pages/Dashboard/GuideHome";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddPackages from "../Pages/Dashboard/AddPackages";
import Packages from "../Pages/Packages";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "packages",
        element: <Packages></Packages>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: 'addpackages',
        element: <AdminRoute><AddPackages></AddPackages></AdminRoute>
      },
      // Guides routes
      {
        path: "guideHome",
        element: (
          <GuideRoute>
            <GuideHome></GuideHome>
          </GuideRoute>
        ),
      },
      {
        path: "users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
    ],
  },
]);

export default router;
