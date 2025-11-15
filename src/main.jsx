import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLayout.jsx';
import Products from './Pages/Products.jsx';
import Services from './Pages/Services.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: "Products", Component: Products },
      { path: "Services", Component: Services },
      { path: "About", Component: About },
      { path: "Login", Component: Login },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
