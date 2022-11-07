import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./root.css"
import Main from './routes/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2>Ops, algo deu errado</h2>,
    children: [
        {
           
        },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);