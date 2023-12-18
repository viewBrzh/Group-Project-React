import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './pages/cart';
import App from './pages/home';
import Register from './pages/register';
import Products from './pages/product';
import Detail from './pages/detail';
import Contact from './pages/contact';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/product/detail/:productId",
    element: <Detail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
