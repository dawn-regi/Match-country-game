import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./pages/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
