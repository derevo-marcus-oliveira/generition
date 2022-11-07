import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, useLoaderData } from "react-router-dom";

import "./root.css"
import Index from './routes';
import Produto, {loader as pLoader, action as pAction} from './routes/components/header/components/catalogo/components/produto/produto';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
    errorElement: <h2>Ops, algo deu errado</h2>,
    children: [
        {
          path: "/pdt:produtoId",
          element: <Produto />,   
          loader: pLoader,  
          action: pAction,       
        },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);