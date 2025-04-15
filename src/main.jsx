// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./config/redux/store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import SingleProducts from "./pages/SingleProducts.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <SingleProducts />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store} router={router}>
   < RouterProvider router={router} />
  </Provider>
);
