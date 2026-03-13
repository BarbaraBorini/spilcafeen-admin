import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import DefaultPage from "./views/DefaultPage";
import AddGamePage from "./views/AddGame";
import EditGamePage from "./views/EditGame";
import "./app.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <DefaultPage /> },
        { path: "create", element: <AddGamePage /> },
        { path: "update/:id", element: <EditGamePage /> },
      ],
    },
  ],
  {
    basename: "/spilcafeen-admin",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
