import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Projects />,
    },
    {
      path: "/about",
      element: <About />,
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
