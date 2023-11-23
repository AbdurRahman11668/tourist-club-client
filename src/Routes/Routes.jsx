import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>
    }
])

export default router;