import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "../components/features/Header";
// Routes
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <Post />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} fallbackElement={<div>Loader</div>} />;
};

export default Router;
