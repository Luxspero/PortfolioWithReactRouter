import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Awards from "./pages/Awards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "interest",
        element: <Interest />,
      },
      {
        path: "awards",
        element: <Awards />,
      },
      // {
      //   path: "people/:id",
      //   element: <People />,
      // },
    ],
  },
]);

export default router;
export { router };
