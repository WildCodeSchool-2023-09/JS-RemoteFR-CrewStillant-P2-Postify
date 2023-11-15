import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Contact from "./pages/Contact";
import Results from "./pages/Results";
import Nature from "./pages/Nature";
import PostCard from "./pages/PostCard";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Images",
        element: <Images />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/results", element: <Results /> },
      { path: "/nature/:query", element: <Nature /> },
      {
        path: "/postcard/:id",
        element: <PostCard />,
        loader: ({ params }) =>
          fetch(`https://api.pexels.com/v1/photos/${params.id}`, {
            headers: {
              Authorization:
                "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
            },
          }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
