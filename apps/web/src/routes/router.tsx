import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About";
import EnterpriseSearch from "../pages/EnterpriseSearch";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/search",
    element: <EnterpriseSearch />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
