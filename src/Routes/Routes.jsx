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
import PackageDetails from "../Pages/PackageDetails";
import AssignedTours from "../Pages/Dashboard/AssignedTours";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import GuideProfilePublic from "../Pages/Dashboard/GuideProfilePublic";
import AllPackages from "../Pages/Home/AllPackages";
import Wishlist from "../Pages/Dashboard/Wishlist";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import Bookings from "../Components/Bookings";
import Community from "../Pages/Community/Community";
import Blog from "../Pages/Blog/Blog";
import Offer from "../Pages/Offer";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    loader: () => fetch("https://tourist-club-server.vercel.app"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packagedetails/:id",
        element: (
          <PrivateRoute>
            <PackageDetails></PackageDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tourist-club-server.vercel.app/packages/${params.id}`),
      },
      {
        path: "allpackages",
        element: <AllPackages></AllPackages>,
        loader: () => fetch("https://tourist-club-server.vercel.app/packages"),
      },
      {
        path: "/community",
        element: <Community></Community>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
      {
        path: "/guideprofilepublic/:id",
        element: (
          <PrivateRoute>
            <GuideProfilePublic></GuideProfilePublic>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tourist-club-server.vercel.app/packages/${params.id}`),
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
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addpackages",
        element: (
          <AdminRoute>
            <AddPackages></AddPackages>
          </AdminRoute>
        ),
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
        path: "assignedtours",
        element: (
          <GuideRoute>
            <AssignedTours></AssignedTours>
          </GuideRoute>
        ),
        loader: () => fetch("https://tourist-club-server.vercel.app/bookings/"),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
