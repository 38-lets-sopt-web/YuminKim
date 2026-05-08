import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/login/LoginPage";
import MembersPage from "../pages/members/MembersPage";
import SignupPage from "../pages/sign-up/SignupPage";
import Mypage from "../pages/mypages/MyPage";
import { Navigate } from "react-router";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
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
    {
      path: "/members",
      element: <MembersPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
