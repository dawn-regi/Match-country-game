import { createBrowserRouter, Navigate } from "react-router-dom";
import { Games } from "./Games";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/games"} />,
  },
  {
    path: "/games",
    element: <Games />,
  },
]);
