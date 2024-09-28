import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter}from "react-router-dom";
import Content from "./content.jsx";
import Messagebox from "./messagebox.jsx";
import Explorebar from "./explorebar.jsx";

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",element:<Content/>
    },
    { path:"/explore",element:<Explorebar/>
   },
   { path:"/message",element:<Messagebox/>
    }
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>
);