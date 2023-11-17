import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import ProtectedRoute from "./protected-routes/protected-route";
import DashBoard from "../pages/dash-board/dash-board";
import Header from "../pages/header/header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/header",
        element: <Header />,
      },
    ],
  },
]);
