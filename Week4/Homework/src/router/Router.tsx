import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/sign-up/SignupPage";
import Mypage from "../pages/mypages/MyPage";

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
