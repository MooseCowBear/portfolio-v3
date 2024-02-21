import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}
