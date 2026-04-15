import Test from "@/pages/test";
import Auth from "@/modules/auth";

export const routes = {
  test: "/test",
  auth: "/auth",
  
};

export const routeElements = [
  {
    path: routes.test,
    element: <Test />,
  },
  
  {
    path: routes.auth,
    element: <Auth />,
  },
  
];