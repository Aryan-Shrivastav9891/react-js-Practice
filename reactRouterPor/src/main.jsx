import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./root.jsx";
import About from "./component/About/About.jsx";
import Home from "./component/Home/Home.jsx";
import Contact from "./component/Contect/ContectUs.jsx";
import User from "./component/User/User.jsx";
import GIthib, { githubinfoloder } from "./component/GitHub/GIthib.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        
        path:'contect-us',
        element:<Contact />
      },
      {
        path:'user/:userId',
        element:<User />
      },
      {
        loader:githubinfoloder,
        path:'github',
        element:<GIthib />
      }
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
