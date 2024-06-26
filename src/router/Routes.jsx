import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "./../pages/about/About";
import Login from "../pages/login/Login";
import Register from "../pages/regeister/Register";
import CheckOut from "../pages/checkout/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "../firebase/Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    //all chlidren routers here
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },

      //login  and Register page here
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "checkout/:id",
        element:<PrivateRoute>
        
        <CheckOut></CheckOut>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },

      //booking 
      { path: "/booking", element:
      <PrivateRoute>
      <Bookings></Bookings> 
      </PrivateRoute>
      
      },
    ],
  },
]);
