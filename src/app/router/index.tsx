import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/shared/components/layout/MainLayout";
import { routeElements, routes } from "./routes";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: routeElements.filter((r) => r.path !== routes.auth),
  },
  {
    path: routes.auth,
    element: routeElements.find(r => r.path === routes.auth)?.element,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;