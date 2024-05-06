import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users/Users.tsx";
import Register from "./pages/Register/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />
  },
  {
    path: "register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
