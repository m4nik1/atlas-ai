import { createBrowserRouter } from "react-router-dom";

import { SearchProvider } from "@/context/useSearch";
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
    element: (
      <SearchProvider>
        <EnterpriseSearch />
      </SearchProvider>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
