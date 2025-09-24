import { RouteObject } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../pages/admin/DashboardPage";
import AdminLayout from "../layouts/AdminLayout";

const adminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [{ path: "dashboard", element: <DashboardPage /> }],
  },
];

export default adminRoutes;
