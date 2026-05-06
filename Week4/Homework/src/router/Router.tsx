import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Mypage from "../pages/MyPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/mypage",
      element: <Mypage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
